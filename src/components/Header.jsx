import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Smart Job Portal</h1>
        <nav className="space-x-4">
          <a className="text-sm text-gray-700 hover:text-gray-900">Home</a>
          <a className="text-sm text-gray-700 hover:text-gray-900">Jobs</a>
          <a className="text-sm text-gray-700 hover:text-gray-900">Profile</a>
        </nav>
      </div>
    </header>
  )
}
