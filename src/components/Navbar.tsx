import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Left Searchbar */}
      <div className='hidden md:flex'>
        <Image src="/search.png" alt="Search Icon" width={14} height={14}/>
        <input type="text" placeholder='search...' />
      </div>
      {/* {Right Icons} */}
      <div className='flex items-center justify-center gap-4'>
      <div className=' bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
        <Image src="/message.png" alt='message icon'  width={20} height={20}/>
      </div>
      <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
        <Image src="/announcement.png" alt='message icon'  width={20} height={20}/>
      </div>
      </div>
    </div>
  )
}
