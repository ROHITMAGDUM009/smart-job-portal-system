import React from 'react'

export default function JobCard({ job }) {
  return (
    <article className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="text-lg font-medium">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
      <p className="mt-2 text-sm text-gray-700">{job.excerpt}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-indigo-600 font-semibold">{job.type}</span>
        <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded">Apply</button>
      </div>
    </article>
  )
}
