"use client"
import React,{useState} from 'react'

import Image from 'next/image';

import Link from 'next/link';
import Swiperr from './Swiper';
// import required modules
import { Press_Start_2P } from 'next/font/google';
function Main() {
  const [activeButton, setActiveButton] = useState('trending');

  const [isActive, setIsActive] = useState<boolean>(false);

  // Type the toggle function
  const toggleActive = (): void => {
    setIsActive(current => !current);
  }

  return (
    <div className='h-[1500px]  sm:h-[1200px] w-full flex flex-col gap-3 p-3 bg-white' style={{ 
      backgroundImage: `url('/bg/Ice Cream.png')`,
      backgroundSize: 'cover', // Optional: Adjust as needed
      backgroundPosition: 'center', // Optional: Adjust as needed
    }}>
    
        <div className='text-[#E91898] mt-[90px] text-2xl text-center font-bold font-warfame'style={{fontFamily : "PressStart2P"}}>EVM WARFARE</div>
       <div className='z-0'>
       <Swiperr/>
       </div> 
       
       
        <div className=' text-xl font-semibold mt-4 ' >
          <div className='flex flex-row gap-2 dark:text-black text-white sm:items-center sm:justify-center'>
           <div style={{fontFamily : "PressStart2P"}}>Play and Win </div> <div className='text-xl'>!</div></div>
            <div className='font-thin text-md dark:text-black text-black sm:flex sm:w-full sm:justify-center sm:items-center'>Select the game you wanna play : </div>
         </div>
         <div className=' w-full flex gap-4 mt-3 sm:items-center sm:justify-center'>
            <button  onClick={() => setActiveButton('trending')}
                className={`h-[40px] w-[110px] rounded-md border-red-600 border-2 font-bold dark:text-white text-white  ${
                    activeButton === 'trending' ? 'bg-[#E91898] dark:text-black text-black' : 'bg-transparent'
                }`}>
                TRENDING
                </button>
            <button onClick={() => setActiveButton('mostPlayed')}
                className={`h-[40px] w-[140px] rounded-md border-[#E91898] border-2  font-bold dark:text-black text-black ${
                    activeButton === 'mostPlayed' ? 'bg-[#E91898] dark:text-black text-black' : 'bg-transparent'
                }`}>MOST PLAYED</button>
         </div>
         {activeButton === 'trending' && (
                <div className='mt-5 flex flex-col gap-5 sm:gap-10 sm:flex-row sm:w-full sm:items-center sm:justify-center'>
                  
                   <div className='sm:rounded-md ml-2 mr-2  h-[70px] w-auto sm:pl-2 sm:pr-2 sm:w-[400px] sm:bg-white  flex justify-between items-center'>
                    <div className='flex gap-2 h-full sm:flex sm:items-center sm:justify-center'>
                    <div className='h-3/4  rounded-md  w-[50px] bg-red-600'>
                      <Image
                      src='/game/vNQdsn.png'
                      alt='game immage'
                      height={60}
                      width={60}
                      />
                    </div>
                    <div className='font-bold h-full flex justify-center dark:text-black text-black items-center'>Flappy Bird</div>
                    </div>
                    <div className=' '>
                        <Link href='https://saintdevelopergames.github.io/FlappyBird/'>
                      <button className='h-[35px] rounded-md w-[80px] dark:text-black text-black bg-[#E91898] font-bold'>
                        PLAY
                        </button>
                        </Link>
                        
                    </div>
                   </div>
                   <div className='sm:rounded-md ml-2 mr-2  h-[70px] w-auto sm:pl-2 sm:pr-2 sm:w-[400px] sm:bg-white  flex justify-between items-center'>
                    <div className='flex gap-2 h-full sm:flex sm:items-center sm:justify-center'>
                    <div className='h-3/4  rounded-md  w-[50px] bg-red-600'>
                      <Image
                      src='/game/file-nKv9DWllpeerZm3psT0UChtm.png'
                      alt='game immage'
                      height={60}
                      width={60}
                      />
                    </div>
                    <div className='font-bold h-full dark:text-black text-black flex justify-center items-center'>Farming Simulator</div>
                    </div>
                    <div className=' '>
                        <Link href='https://harshitsiwach.github.io/webgl/'>
                      <button className='h-[35px] rounded-md w-[80px] dark:text-black text-black  bg-[#E91898] font-bold'>
                        PLAY
                        </button>
                        </Link>
                        
                    </div>
                   </div>
                   
                </div>
            )}

            {activeButton === 'mostPlayed' && (
                <div>
                    {/* Content shown when 'Most Played' is clicked */}
                    <h2>Most Played Games</h2>
                   
                </div>
            )}
            
    </div>
  )
}

export default Main
