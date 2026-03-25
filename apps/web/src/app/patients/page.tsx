'use client'

import { useState, useEffect, useCallback } from 'react'
import { PageWrapper, PageHeader, Button, SlideOver } from '@/components/ui'
import { PatientTable, type Patient } from '@/components/patients/PatientTable'
import { PatientDetailTabs } from '@/components/patients/PatientDetailTabs'
import { PatientForm, type PatientFormData } from '@/components/forms/PatientForm'

const API_BASE_URL = 'http://localhost:3001/api/v1'

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create')
  const [submitting, setSubmitting] = useState(false)

  const fetchPatients = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_BASE_URL}/patients`)
      if (!response.ok) throw new Error('Failed to fetch patients')
      const data = await response.json()
      setPatients(data.data || [])
    } catch (error) {
      console.error('Error fetching patients:', error)
      setPatients([])
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchPatientDetails = useCallback(async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/patients/${id}`)
      if (!response.ok) throw new Error('Failed to fetch patient details')
      const data = await response.json()
      return data.data
    } catch (error) {
      console.error('Error fetching patient details:', error)
      return null
    }
  }, [])

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim()) { await fetchPatients(); return }
    try {
      setLoading(true)
      const response = await fetch(`${API_BASE_URL}/patients/search?q=${encodeURIComponent(query)}`)
      if (!response.ok) throw new Error('Search failed')
      const data = await response.json()
      setPatients(data.data || [])
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setLoading(false)
    }
  }, [fetchPatients])

  useEffect(() => { fetchPatients() }, [fetchPatients])

  const handleEdit = useCallback((patient: Patient) => {
    setSelectedPatient(patient); setFormMode('edit'); setShowForm(true); setShowDetail(false)
  }, [])

  const handleViewDetails = useCallback(async (patient: Patient) => {
    const details = await fetchPatientDetails(patient._id)
    if (details) { setSelectedPatient(details); setShowDetail(true); setShowForm(false) }
  }, [fetchPatientDetails])

  const handleNewPatient = useCallback(() => {
    setSelectedPatient(null); setFormMode('create'); setShowForm(true); setShowDetail(false)
  }, [])

  const handleFormSubmit = useCallback(async (formData: PatientFormData) => {
    setSubmitting(true)
    try {
      const url = formMode === 'create'
        ? `${API_BASE_URL}/patients`
        : `${API_BASE_URL}/patients/${selectedPatient?._id}`
      const response = await fetch(url, {
        method: formMode === 'create' ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Failed to save patient')
      await fetchPatients()
      setShowForm(false); setSelectedPatient(null)
    } catch (error) {
      console.error('Error saving patient:', error)
      alert('Failed to save patient. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }, [formMode, selectedPatient, fetchPatients])

  const handleFormCancel = useCallback(() => {
    setShowForm(false); setShowDetail(false); setSelectedPatient(null)
  }, [])

  return (
    <PageWrapper className="py-8">
      {showDetail && selectedPatient ? (
        <div className="space-y-6">
          <button onClick={() => setShowDetail(false)} className="text-sm text-primary-600 hover:text-primary-700">
            ← Back to Patients
          </button>
          <PatientDetailTabs
            patientName={`${selectedPatient.firstName} ${selectedPatient.lastName}`}
            patientId={selectedPatient._id}
            patientInfo={{
              dateOfBirth: selectedPatient.dateOfBirth?.toString(),
              gender: selectedPatient.gender,
              phone: selectedPatient.phone,
              address: selectedPatient.address,
            }}
            tabs={[
              { id: 'overview', label: 'Overview', content: <p className="text-sm text-secondary-600">No medical history records available.</p> },
              { id: 'encounters', label: 'Encounters', content: <p className="text-sm text-secondary-600">No encounters available.</p> },
              { id: 'payments', label: 'Payments', content: <p className="text-sm text-secondary-600">No payment records available.</p> },
              { id: 'documents', label: 'Documents', content: <p className="text-sm text-secondary-600">No documents available.</p> },
            ]}
          />
          <Button variant="secondary" onClick={() => handleEdit(selectedPatient)}>Edit Patient</Button>
        </div>
      ) : (
        <>
          <PageHeader
            title="Patients"
            subtitle="Manage and view patient information"
            actions={<Button variant="primary" onClick={handleNewPatient}>+ New Patient</Button>}
          />
          <PatientTable
            patients={patients}
            isLoading={loading}
            onEdit={handleEdit}
            onViewDetails={handleViewDetails}
            onSearch={handleSearch}
          />
        </>
      )}
      <SlideOver
        isOpen={showForm}
        onClose={handleFormCancel}
        title={formMode === 'create' ? 'New Patient' : 'Edit Patient'}
        subtitle={formMode === 'create' ? 'Add a new patient to the system' : 'Update patient information'}
        width="w-full sm:w-[400px]"
      >
        <PatientForm
          initialData={formMode === 'edit' && selectedPatient ? {
            firstName: selectedPatient.firstName,
            lastName: selectedPatient.lastName,
            dateOfBirth: (typeof selectedPatient.dateOfBirth === 'string' ? selectedPatient.dateOfBirth : selectedPatient.dateOfBirth?.toISOString() || '').split('T')[0],
            sex: (selectedPatient.gender === 'male' ? 'M' : selectedPatient.gender === 'female' ? 'F' : 'O') as 'M' | 'F' | 'O',
            contactNumber: selectedPatient.phone || '',
            address: selectedPatient.address || '',
          } : undefined}
          isLoading={submitting}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      </SlideOver>
    </PageWrapper>
  )
}
