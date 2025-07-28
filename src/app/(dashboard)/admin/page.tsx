import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

export default function AdminPage() {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      {/* USER CARDS */}
      <div className='flex gap-4 justify-between flex-wrap'>
        <UserCard user="student"/>
        <UserCard user="teacher"/>
        <UserCard user="parent"/>
        <UserCard user="staff"/>
      </div>
      {/* Middle Charts */}
      <div className='flex gap-4 flex-col lg:flex-row'>
        {/* Student count Chart */}
        <div className='w-full lg:w-1/3 h-[450px]'>
        <CountChart />
        </div>
        {/* Attendance Chart */}
        <div className='w-full lg:w-2/3 h-[450px]'>
        <AttendanceChart />
        </div>
      </div>
      {/* Bottom Chart */}
      <div className='w-full h-[500px]'>
        <FinanceChart />
      </div>
      </div>
      {/* RIGHT */}
      <div className='w-full lg:w-1/3'>
      R
      </div>

    </div>
  )
}
