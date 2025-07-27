import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Left Searchbar */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src="/search.png" alt="Search Icon" width={14} height={14}/>
        <input type="text" placeholder='search...' className='w-[200px] p-2 bg-transparent outline-none' />
      </div>
      {/* {Right Icons} */}
      <div className='flex items-center justify-end w-full gap-4'>
      <div className=' bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
        <Image src="/message.png" alt='message icon'  width={20} height={20}/>
      </div>
      <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
        <Image src="/announcement.png" alt='message icon'  width={20} height={20}/>
        <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>
          1
        </div>
      </div>
      <div className='flex flex-col'>
        <span className='text-xs leading-3 font-medium'>Joe Mwangi</span>
        <span className='text-[10px] text-gray-400 text-right'>Admin</span>
      </div>
      <Image src="/avatar.png" alt="avatar" width={36} height={36} className='rounded-full'/>
      </div>
    </div>
  )
}
