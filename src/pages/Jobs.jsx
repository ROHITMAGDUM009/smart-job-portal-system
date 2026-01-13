import React from 'react'
import JobCard from '../components/JobCard'

export default function Jobs() {
  const jobs = [] // placeholder
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">All Jobs</h2>
      {jobs.length === 0 ? (
        <p className="text-sm text-gray-600">No jobs yet — check back soon.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {jobs.map(j => <JobCard key={j.id} job={j} />)}
        </div>
      )}
    </section>
  )
}
