/**
 * PHI field-level encryption tests for patient.model.ts
 *
 * Verifies that contactNumber, address, and dateOfBirth are stored
 * encrypted in MongoDB and correctly decrypted when retrieved.
 * Uses an in-memory MongoDB instance for full isolation.
 */

// ── Environment stubs (must precede all imports) ──────────────────────────────
const VALID_KEY = 'a'.repeat(64); // 64 hex chars = 32 bytes, valid AES-256 key

process.env.MONGO_URI = 'mongodb://localhost:27017/test';
process.env.JWT_ACCESS_TOKEN_SECRET = 'test-access-secret-32-chars-long!!';
process.env.JWT_REFRESH_TOKEN_SECRET = 'test-refresh-secret-32-chars-long!';
process.env.FIELD_ENCRYPTION_KEY = VALID_KEY;

jest.mock('@health-watchers/config', () => ({
  config: {
    jwt: {
      accessTokenSecret: 'test-access-secret-32-chars-long!!',
      refreshTokenSecret: 'test-refresh-secret-32-chars-long!',
      issuer: 'health-watchers-api',
      audience: 'health-watchers-client',
    },
    fieldEncryptionKey: 'a'.repeat(64),
    nodeEnv: 'test',
    mongoUri: '',
    stellarNetwork: 'testnet',
    stellarHorizonUrl: '',
    stellarSecretKey: '',
    stellar: { network: 'testnet', horizonUrl: '', secretKey: '', platformPublicKey: '' },
    supportedAssets: ['XLM'],
    stellarServiceUrl: '',
    geminiApiKey: '',
  },
}));

// ── Imports ───────────────────────────────────────────────────────────────────
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { PatientModel } from './models/patient.model';

// ── Helpers ───────────────────────────────────────────────────────────────────
// AES-256-GCM encrypted strings have the form <24-hex>:<n-hex>:<32-hex>
const ENCRYPTED_PATTERN = /^[0-9a-f]{24}:[0-9a-f]+:[0-9a-f]{32}$/;

let idCounter = 0;
function makeDoc(overrides: Record<string, unknown> = {}) {
  idCounter++;
  return {
    systemId: `PHI-TEST-${Date.now()}-${idCounter}`,
    firstName: 'Test',
    lastName: 'Patient',
    searchName: 'test patient',
    dateOfBirth: '1990-01-01',
    sex: 'M' as const,
    contactNumber: '555-1234',
    address: '123 Test St',
    clinicId: new mongoose.Types.ObjectId(),
    ...overrides,
  };
}

// ── MongoDB Memory Server lifecycle ──────────────────────────────────────────
let mongod: MongoMemoryServer;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  await mongoose.connect(mongod.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongod.stop();
});

afterEach(async () => {
  process.env.FIELD_ENCRYPTION_KEY = VALID_KEY;
  await PatientModel.deleteMany({});
  jest.clearAllMocks();
});

// ── PHI Encryption Tests ─────────────────────────────────────────────────────
describe('PHI encryption — patient.model', () => {
  describe('create()', () => {
    it('stores contactNumber as encrypted (not plaintext) in MongoDB', async () => {
      const patient = await PatientModel.create(makeDoc({ contactNumber: '555-1234' }));
      const raw = await mongoose.connection.collection('patients').findOne({ _id: patient._id });
      expect(raw?.contactNumber).not.toBe('555-1234');
      expect(raw?.contactNumber).toMatch(ENCRYPTED_PATTERN);
    });

    it('stores address as encrypted in MongoDB', async () => {
      const patient = await PatientModel.create(makeDoc({ address: '123 Main St' }));
      const raw = await mongoose.connection.collection('patients').findOne({ _id: patient._id });
      expect(raw?.address).not.toBe('123 Main St');
      expect(raw?.address).toMatch(ENCRYPTED_PATTERN);
    });

    it('stores dateOfBirth as encrypted in MongoDB', async () => {
      const patient = await PatientModel.create(makeDoc({ dateOfBirth: '1990-01-01' }));
      const raw = await mongoose.connection.collection('patients').findOne({ _id: patient._id });
      expect(raw?.dateOfBirth).not.toBe('1990-01-01');
      expect(raw?.dateOfBirth).toMatch(ENCRYPTED_PATTERN);
    });

    it('returns decrypted values to the caller after create', async () => {
      const patient = await PatientModel.create(
        makeDoc({ contactNumber: '555-1234', address: '123 Main St', dateOfBirth: '1990-01-01' })
      );
      expect(patient.contactNumber).toBe('555-1234');
      expect(patient.address).toBe('123 Main St');
      expect(patient.dateOfBirth).toBe('1990-01-01');
    });

    it('uses a random IV so two identical plaintexts produce different ciphertexts', async () => {
      const p1 = await PatientModel.create(makeDoc({ contactNumber: '555-1234' }));
      const p2 = await PatientModel.create(makeDoc({ contactNumber: '555-1234' }));
      const raw1 = await mongoose.connection.collection('patients').findOne({ _id: p1._id });
      const raw2 = await mongoose.connection.collection('patients').findOne({ _id: p2._id });
      expect(raw1?.contactNumber).not.toBe(raw2?.contactNumber);
    });
  });

  describe('findOne()', () => {
    it('returns decrypted contactNumber', async () => {
      const created = await PatientModel.create(makeDoc({ contactNumber: '555-1234' }));
      const found = await PatientModel.findOne({ _id: created._id });
      expect(found?.contactNumber).toBe('555-1234');
    });

    it('returns decrypted address', async () => {
      const created = await PatientModel.create(makeDoc({ address: '456 Oak Ave' }));
      const found = await PatientModel.findOne({ _id: created._id });
      expect(found?.address).toBe('456 Oak Ave');
    });

    it('returns decrypted dateOfBirth', async () => {
      const created = await PatientModel.create(makeDoc({ dateOfBirth: '1985-06-15' }));
      const found = await PatientModel.findOne({ _id: created._id });
      expect(found?.dateOfBirth).toBe('1985-06-15');
    });
  });

  describe('find()', () => {
    it('decrypts contactNumber on all documents in the result array', async () => {
      await PatientModel.create(makeDoc({ contactNumber: '111-2222' }));
      await PatientModel.create(makeDoc({ contactNumber: '333-4444' }));
      const docs = await PatientModel.find({});
      const numbers = docs.map((d) => d.contactNumber).sort();
      expect(numbers).toContain('111-2222');
      expect(numbers).toContain('333-4444');
    });

    it('raw MongoDB documents remain encrypted while Mongoose results are decrypted', async () => {
      await PatientModel.create(makeDoc({ contactNumber: '777-8888' }));
      const [mongooseDoc] = await PatientModel.find({});
      const rawDoc = await mongoose.connection.collection('patients').findOne({});
      expect(mongooseDoc.contactNumber).toBe('777-8888');
      expect(rawDoc?.contactNumber).toMatch(ENCRYPTED_PATTERN);
    });
  });

  describe('findOneAndUpdate()', () => {
    it('stores updated contactNumber as encrypted in MongoDB', async () => {
      const created = await PatientModel.create(makeDoc({ contactNumber: '111-0000' }));
      await PatientModel.findOneAndUpdate(
        { _id: created._id },
        { $set: { contactNumber: '999-5678' } },
        { new: true }
      );
      const raw = await mongoose.connection.collection('patients').findOne({ _id: created._id });
      expect(raw?.contactNumber).not.toBe('999-5678');
      expect(raw?.contactNumber).toMatch(ENCRYPTED_PATTERN);
    });

    it('returns decrypted contactNumber when new: true', async () => {
      const created = await PatientModel.create(makeDoc({ contactNumber: '111-0000' }));
      const updated = await PatientModel.findOneAndUpdate(
        { _id: created._id },
        { $set: { contactNumber: '999-5678' } },
        { new: true }
      );
      expect(updated?.contactNumber).toBe('999-5678');
    });
  });

  describe('graceful error handling', () => {
    it('throws when FIELD_ENCRYPTION_KEY is missing on save', async () => {
      process.env.FIELD_ENCRYPTION_KEY = '';
      await expect(PatientModel.create(makeDoc())).rejects.toThrow(/FIELD_ENCRYPTION_KEY/);
    });

    it('throws when FIELD_ENCRYPTION_KEY is wrong length on save', async () => {
      process.env.FIELD_ENCRYPTION_KEY = 'tooshort';
      await expect(PatientModel.create(makeDoc())).rejects.toThrow(/FIELD_ENCRYPTION_KEY/);
    });

    it('throws on findOne when FIELD_ENCRYPTION_KEY changed after save', async () => {
      const created = await PatientModel.create(makeDoc({ contactNumber: '555-1234' }));
      // Rotate to a different key — decryption will fail with auth tag mismatch
      process.env.FIELD_ENCRYPTION_KEY = 'b'.repeat(64);
      await expect(PatientModel.findOne({ _id: created._id })).rejects.toThrow();
    });
  });
});
