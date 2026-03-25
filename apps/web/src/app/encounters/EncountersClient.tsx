"use client";

import { useState, useEffect } from "react";

interface Encounter {
  id: string;
  patientId: string;
  date: string;
  notes: string;
}

interface Labels {
  title: string;
  loading: string;
  empty: string;
  id: string;
  patient: string;
  date: string;
  notes: string;
}

export default function EncountersClient({ labels }: { labels: Labels }) {
  const [encounters, setEncounters] = useState<Encounter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/encounters")
      .then((res) => res.json())
      .then((data) => { setEncounters(data || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p role="status" aria-live="polite" className="px-4 py-8 text-gray-500">{labels.loading}</p>;
  }

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{labels.title}</h1>
      {encounters.length === 0 ? (
        <p role="status" className="text-gray-500">{labels.empty}</p>
      ) : (
        <ul aria-label={labels.title} className="flex flex-col gap-4 list-none p-0 m-0">
          {encounters.map((e) => (
            <li key={e.id} className="rounded border border-gray-200 p-4 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                <div><p className="text-xs text-gray-500 uppercase">{labels.id}</p><p className="font-medium">{e.id}</p></div>
                <div><p className="text-xs text-gray-500 uppercase">{labels.patient}</p><p className="font-medium">{e.patientId}</p></div>
                <div><p className="text-xs text-gray-500 uppercase">{labels.date}</p><p>{e.date}</p></div>
                <div><p className="text-xs text-gray-500 uppercase">{labels.notes}</p><p>{e.notes}</p></div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
