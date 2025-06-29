'use client'
import { EnqueueJob } from '@/lib/Actions/JobsQueue'
import React from 'react'
const page = () => {
  return (
    <div className=''>

      <button onClick={
        () => {
          EnqueueJob("test")
        }
      }>Enqueue Job</button>
    </div>
  )
}

export default page