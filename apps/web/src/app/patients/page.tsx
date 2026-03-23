'use client';

import { useState, useEffect } from 'react';
import { PageWrapper, PageHeader, Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui';

interface Patient {
  id: string;
  name: string;
  dob: string;
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/patients')
      .then(res => res.json())
      .then(data => {
        setPatients(data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <PageWrapper className="py-8">
        <div className="flex items-center justify-center">
          <p className="text-secondary-600">Loading patients...</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className="py-8">
      <PageHeader title="Patients" />
      
      <div className="space-y-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date of Birth</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map(patient => (
              <TableRow key={patient.id}>
                <TableCell className="font-mono text-sm">{patient.id}</TableCell>
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell>{patient.dob}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {patients.length === 0 && (
          <div className="text-center py-8">
            <p className="text-secondary-600">No patients found. API stub - implement CRUD.</p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

