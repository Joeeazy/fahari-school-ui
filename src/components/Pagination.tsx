import React from 'react'

export default function Pagination() {
  return (
    <div className='p-4 flex items-center justify-between text-gray-400'>
        <button className='py-4 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disbaled:cursor-not-allowed'>Prev</button>
        <div className='flex items-center gap-2 text-sm'>
            <button className='px-2 rounded-sm bg-joeSky'>1</button>
            <button className='px-2 rounded-sm'>2</button>
            <button className='px-2 rounded-sm'>3</button>
            <button className='px-2 rounded-sm'>4</button>
            ...
            <button className='px-2 rounded-sm'>10</button>
        </div>
        <button className='py-4 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disbaled:cursor-not-allowed'>Next</button>
    </div>
  )
}
