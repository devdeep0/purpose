"use client"
import React from 'react'
import Image from 'next/image';
import { useActiveAccount } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { shortenAddress } from "thirdweb/utils";
import { Button } from "@headlessui/react";

function Header() {
  const account = useActiveAccount();
  return (
    <div className='bg-transparent w-full absolute top-0 flex justify-between items-center p-2 text-black h-[70px] z-10'>
    <div className='flex items-center'>
     <Image
     src='/evm.png'
     alt=''
     height={60}
     width={60}
     />
     <div className='text-md text-bold'>X</div>
    <Image
    className='pt-5 p-4'
     src='/idrvDcv7Hh.png'
     alt=''
     height={75}
     width={75}
     />

    </div>
    
    <div className='w-[200px] h-full flex justify-end items-end'>
      <div>
      {account && 
          <Button onClick={() => (window as any).Telegram.WebApp.openLink(`https://etherscan.io/address/${account.address}`)} className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">{shortenAddress(account.address)}</Button>}    
      </div>
      
  
       
     
    </div>
  </div>

  )
}

export default Header