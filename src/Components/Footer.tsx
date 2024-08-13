import React from 'react'
import Image from 'next/image'
import Download from './socials'
function Footer() {
  return (
    <>
    <div className='fixed bottom-0 bg-transparent p-4 flex justify-center items-center w-full gap-2 text-black'>
    <Download/>
    
    </div>
    </>
  )
}

export default Footer