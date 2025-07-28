"use client" 
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


// Temporary
const events = [
  {
    id: 1,
    title: "Lorem Ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem Ipsum dolor Lorem dolor Ipsum"
  },
  {
    id: 2,
    title: "Lorem Ipsum dolor",
    time: "2:00 PM - 3:00 PM",
    description: "Lorem Ipsum dolor Lorem dolor Ipsum"
  },
  {
    id: 3,
    title: "Lorem Ipsum dolor",
    time: "3:00 PM - 5:00 PM",
    description: "Lorem Ipsum dolor Lorem dolor Ipsum"
  },
  {
    id: 4,
    title: "Lorem Ipsum dolor",
    time: "8:00 PM - 10:00 PM",
    description: "Lorem Ipsum dolor Lorem dolor Ipsum"
  },
]

export default function EventCalender() {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
      </div>
      <div className='flex flex-col gap-4'>
        {
          events.map(event => (
            <div className=' p-5 rounded-md  border-2 border-gray-100 border-t-4 odd:border-t-joeSky even:border-t-joeYellow' key={event.id}>
              <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-gray-600 '>{event.title}</h1>
                <span className='text-gray-300 text-xs'>{event.time}</span>
              </div>
              <p className='text-gray-400 text-sm mt-2'>{event.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
