import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalender'
import EventCalender from '@/components/EventCalender'
import React from 'react'

export default function StudentPage() {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
      {/* Left */}
      <div className='w-full xl:w-2/3'>
      <div className='h-full bg-white p-4 rounded-md'>
        <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
        <BigCalendar />
      </div>
      </div>
      {/* Right     */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
      <EventCalender />
      <Announcements />
      </div>
  </div>
  )
}
