"use client"
import Image from 'next/image';
import React from 'react'

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 125,
    fill: 'white',
  },
  {
    name: 'Boys',
    count: 75,
    fill: "#FAE27C",
  },
  {
    name: 'Girls',
    count: 50,
    fill: "#C3EBFA",
  },
  
];

export default function CountChart() {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* Title */}
        <div className=' flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        {/* Chart */}
        <div className='relative w-full h-[75%]'>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
        {/* Bottom */}
        <div className='flex justify-center gap-16'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <div className='w-5 h-5 rounded-full bg-joeYellow'/>
                <h1 className='font-semibold'>2190</h1>
                <h2 className='text-gray-500 text-xs'>Boys (54%)</h2>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <div className='w-5 h-5 rounded-full bg-joeSky '/>
                <h1 className='font-semibold'>1897</h1>
                <h2 className='text-gray-500 text-xs'>Girls (46%)</h2>
            </div>
        </div>
    </div>
  )
}
