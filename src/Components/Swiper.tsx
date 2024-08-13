"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
function Swiperr() {
  return (
    <div  className='relative z-10'>
        
    <Swiper  autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }} pagination={true} modules={[Autoplay,Pagination]} className=" z-10 mySwiper w-full h-[200px] sm:h-full sm:w-[400px]  rounded-2xl ">
      <SwiperSlide className='z-10'>
        <Image
        className='rounded-2xl '
        src='/TaikoxEVM2.1.png'
        alt=''
        height={500}
        width={500}
        />
      </SwiperSlide>
      <SwiperSlide className='z-10'>
         <Image
        className='rounded-2xl'
        src='/x_1.png'
        alt=''
        height={500}
        width={500}
        /></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Swiperr