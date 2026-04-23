import { 
  Keypair, 
  Server, 
  TransactionBuilder, 
  BASE_FEE, 
  Networks, 
  Operation, 
  Asset 
} from '@stellar/stellar-sdk';
import { stellarConfig } from './config';
import { assertTransactionLimit } from './guards';
import logger from './logger';

/**
 * Get the appropriate network passphrase using SDK constants
 */
export function getNetworkPassphrase(): string {
  return stellarConfig.network === 'mainnet' ? Networks.PUBLIC : Networks.TESTNET;
}

/**
 * Get Horizon server instance
 */
export function getHorizonServer(): Server {
  return new Server(stellarConfig.horizonUrl);
}

/**
 * Fund an account using Friendbot (testnet only)
 * Returns 403 on mainnet as Friendbot is testnet-only
 */
export async function fundAccount(publicKey: string, amount?: number) {
  // Friendbot is testnet-only
  if (stellarConfig.network === 'mainnet') {
    throw new Error('Friendbot funding is not available on mainnet. Use real XLM instead.');
  }

  logger.info({ publicKey, amount }, 'Funding account via Friendbot');

  try {
    const response = await fetch(
      `https://friendbot.stellar.org?addr=${encodeURIComponent(publicKey)}`
    );

    if (!response.ok) {
      throw new Error(`Friendbot request failed: ${response.statusText}`);
    }

    const json = await response.json();
    logger.info({ publicKey }, 'Account funded successfully');
    
    return {
      hash: json.hash,
      ledger: json.ledger,
    };
  } catch (error) {
    logger.error({ error, publicKey }, 'Failed to fund account');
    throw error;
  }
}

/**
 * Create a payment intent (transaction envelope)
 */
export async function createIntent(
  fromPublicKey: string,
  toPublicKey: string,
  amount: string
) {
  const amountNum = parseFloat(amount);
  assertTransactionLimit(amountNum);

  logger.info({ from: fromPublicKey, to: toPublicKey, amount }, 'Creating payment intent');

  const server = getHorizonServer();
  const sourceKeypair = Keypair.fromSecret(stellarConfig.stellarSecretKey);

  try {
    const account = await server.loadAccount(fromPublicKey);
    
    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: getNetworkPassphrase(), // Use SDK constant
    })
      .addOperation(
        Operation.payment({
          destination: toPublicKey,
          asset: Asset.native(),
          amount: amount,
        })
      )
      .setTimeout(300)
      .build();

    transaction.sign(sourceKeypair);

    const xdr = transaction.toXDR();
    const hash = transaction.hash().toString('hex');

    logger.info({ hash }, 'Payment intent created');

    return {
      xdr,
      hash,
      networkPassphrase: getNetworkPassphrase(),
    };
  } catch (error) {
    logger.error({ error, from: fromPublicKey, to: toPublicKey }, 'Failed to create intent');
    throw error;
  }
}

/**
 * Verify a transaction by hash
 */
export async function verifyIntent(hash: string) {
  logger.info({ hash }, 'Verifying transaction');

  const server = getHorizonServer();

  try {
    const transaction = await server.transactions().transaction(hash).call();
    
    logger.info({ hash, successful: transaction.successful }, 'Transaction verified');

    return {
      successful: transaction.successful,
      ledger: transaction.ledger_attr,
      createdAt: transaction.created_at,
    };
  } catch (error) {
    logger.error({ error, hash }, 'Failed to verify transaction');
    throw error;
  }
}
