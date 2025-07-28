import UserCard from '@/components/UserCard'
import React from 'react'

export default function AdminPage() {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3'>
      {/* USER CARDS */}
      <div className='flex gap-4 justify-between flex-wrap'>
        <UserCard user="student"/>
        <UserCard user="teacher"/>
        <UserCard user="parent"/>
        <UserCard user="staff"/>
      </div>
      </div>
      {/* RIGHT */}
      <div className='w-full lg:w-1/3 bg-red-400'>
      R
      </div>

    </div>
  )
}
