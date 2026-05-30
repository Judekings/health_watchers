export interface AgingBucket {
  label: string;
  minDays: number;
  maxDays: number | null;
  encounters: AgingEntry[];
}

export interface AgingEntry {
  encounterId: string;
  patientId: string;
  serviceDate: Date;
  daysUnbilled: number;
}

const BUCKETS: Omit<AgingBucket, 'encounters'>[] = [
  { label: '0–30 days',  minDays: 0,  maxDays: 30  },
  { label: '31–60 days', minDays: 31, maxDays: 60  },
  { label: '61–90 days', minDays: 61, maxDays: 90  },
  { label: '>90 days',   minDays: 91, maxDays: null },
];

export function buildAgingReport(
  entries: Array<{ encounterId: string; patientId: string; serviceDate: Date }>,
  asOf: Date = new Date(),
): AgingBucket[] {
  const buckets: AgingBucket[] = BUCKETS.map(b => ({ ...b, encounters: [] }));

  for (const entry of entries) {
    const days   = Math.floor((asOf.getTime() - entry.serviceDate.getTime()) / 86_400_000);
    const bucket = buckets.find(b => days >= b.minDays && (b.maxDays === null || days <= b.maxDays));
    if (bucket) bucket.encounters.push({ ...entry, daysUnbilled: days });
  }

  return buckets;
}
