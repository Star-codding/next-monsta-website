import React from 'react'

export default function loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-lg text-gray-600 animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
