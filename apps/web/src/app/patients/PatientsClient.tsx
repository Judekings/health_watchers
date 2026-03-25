"use client";

import { useState, useEffect } from "react";

interface Patient {
  id: string;
  name: string;
  dob: string;
}

interface Labels {
  title: string;
  loading: string;
  empty: string;
  id: string;
  name: string;
  dob: string;
}

export default function PatientsClient({ labels }: { labels: Labels }) {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/patients")
      .then((res) => res.json())
      .then((data) => { setPatients(data || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p role="status" aria-live="polite" className="px-4 py-8 text-gray-500">{labels.loading}</p>;
  }

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{labels.title}</h1>
      {patients.length === 0 ? (
        <p role="status" className="text-gray-500">{labels.empty}</p>
      ) : (
        <table aria-label={labels.title} className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th scope="col" className="border border-gray-200 px-4 py-2 text-left">{labels.id}</th>
              <th scope="col" className="border border-gray-200 px-4 py-2 text-left">{labels.name}</th>
              <th scope="col" className="border border-gray-200 px-4 py-2 text-left">{labels.dob}</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="even:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{p.id}</td>
                <td className="border border-gray-200 px-4 py-2">{p.name}</td>
                <td className="border border-gray-200 px-4 py-2">{p.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
