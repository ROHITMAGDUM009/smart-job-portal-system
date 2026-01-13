import React from 'react'
import JobCard from '../components/JobCard'

const sampleJobs = [
  { id: 1, title: 'Frontend Engineer', company: 'Acme Co', location: 'Remote', excerpt: 'Build delightful user experiences.', type: 'Full-time' },
  { id: 2, title: 'Backend Engineer', company: 'Beta Labs', location: 'NYC', excerpt: 'Work on scalable APIs.', type: 'Contract' }
]

export default function Home() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Discover Jobs</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {sampleJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  )
}
