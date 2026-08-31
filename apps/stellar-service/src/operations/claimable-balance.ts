import * as StellarSdk from '@stellar/stellar-sdk';
import type { ServerApi } from '@stellar/stellar-sdk/lib/horizon';
import { withHorizonCall } from '../stellar.js';

export interface ClaimableBalanceRecord {
  id: string;
  amount: string;
  asset: string;
  claimants: any[];
  lastModifiedLedger: number;
  lastModifiedTime: string;
  status: 'created' | 'claimed' | 'refunded' | 'expired';
}

function isBalanceExpired(claimableUntil: Date): boolean {
  return new Date() > claimableUntil;
}

export function createClaimableBalance(params: ClaimableBalanceParams): StellarSdk.Transaction {
  const {
    sourceAccount,
    amount,
    asset,
    claimantPublicKey,
    claimableAfter,
    claimableUntil,
    networkPassphrase,
    baseFee,
  } = params;

  if (isBalanceExpired(claimableUntil)) {
    throw new Error('claimableUntil must be in the future');
  }

  if (claimableAfter >= claimableUntil) {
    throw new Error('claimableAfter must be before claimableUntil');
  }

  // Create claimant with time-based predicates
  const claimant = new StellarSdk.Claimant(
    claimantPublicKey,
    StellarSdk.Claimant.predicateAnd(
      StellarSdk.Claimant.predicateNot(
        StellarSdk.Claimant.predicateBeforeAbsoluteTime(
          Math.floor(claimableAfter.getTime() / 1000).toString()
        )
      ),
      StellarSdk.Claimant.predicateBeforeAbsoluteTime(
        Math.floor(claimableUntil.getTime() / 1000).toString()
      )
    )
  );

  const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
    fee: baseFee,
    networkPassphrase,
  })
    .addOperation(
      StellarSdk.Operation.createClaimableBalance({
        asset,
        amount,
        claimants: [claimant],
      })
    )
    .setTimeout(30)
    .build();

  return transaction;
}

export function claimClaimableBalance(params: ClaimBalanceParams): StellarSdk.Transaction {
  const { claimerAccount, balanceId, networkPassphrase, baseFee } = params;

  const transaction = new StellarSdk.TransactionBuilder(claimerAccount, {
    fee: baseFee,
    networkPassphrase,
  })
    .addOperation(
      StellarSdk.Operation.claimClaimableBalance({
        balanceId,
      })
    )
    .setTimeout(30)
    .build();

  return transaction;
}

export async function getClaimableBalance(
  server: StellarSdk.Horizon.Server,
  balanceId: string
): Promise<ClaimableBalanceRecord | null> {
  try {
    const response = await withHorizonCall(
      'claimableBalance',
      { balanceId, operation: 'getClaimableBalance' },
      () => server.claimableBalances().claimableBalance(balanceId).call()
    );

    return {
      id: response.id,
      amount: response.amount,
      asset: response.asset,
      claimants: response.claimants,
      lastModifiedLedger: response.last_modified_ledger,
      lastModifiedTime:
        (response as any).last_modified_time ||
        (response as any).created_at ||
        new Date().toISOString(),
      status: isBalanceExpired(new Date((response as any).last_modified_time || Date.now()))
        ? 'expired'
        : 'created',
    };
  } catch (error: any) {
    if (error.response?.status === 404) {
      return null;
    }
    throw error;
  }
}

export function isClaimableBalanceValid(balance: ClaimableBalanceRecord): boolean {
  return balance.status === 'created';
}

export function canClaimBalance(balance: ClaimableBalanceRecord, claimantPublicKey: string): boolean {
  if (!isClaimableBalanceValid(balance)) {
    return false;
  }

  return balance.claimants.some(
    (c: any) => c.destination === claimantPublicKey && !c.predicate?.beforeAbsoluteTime
  );
}
