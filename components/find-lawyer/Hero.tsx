"use client";
import React from 'react'
import { CustomButton } from '@/components'
import Image from "next/image"
const HeroFindLawyer = () => {
    const handleScroll = () => {
        
    }
  return (
    // <div className='grid grid-cols-3 grid-rows-1 z-0 h-fit mx-auto rounded-lg  p-5'>
        // <div className=' col-span-2 padding-x pl-5 justify-center content-center my-3'>
        //     <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>
        //         we will resolve your problem
        //     </h1>
        //     <p className='text-[25px] text-black-100 mt-5 uppercase font-semibold'>
        //         Tell us your case and discuse about the solution <br/>
        //         Let's make Appointment
        //     </p>
        //     <CustomButton 
        //         title="Search Lawyer" 
        //         btnType='button'
        //         containerStyle=" my-2 bg-indigo-400 hover:bg-white hover:text-teal-800 text-white rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500"
        //         handleClick={()=>{handleScroll}}
        //     />
        // </div>
    //     <div className='grid justify-items-center content-center'>
    //         <div className='z-0 relative w-[90%] h-96'>
    //             <Image src="/lawyer-person.png" alt="hero" fill className="object-none"/>
    //         </div>
    //     </div>
    // </div>
    <div className="container bg-gradient-to-t
    from-malachite-200
    via-malachite-300
    to-malachite-400 rounded-3xl grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 justify-items-center mx-auto lg:py-12 sm:py-16 lg:justify-between">
		<div className="flex items-center justify-center lg:mt-0 h-60 sm:h-64 lg:h-72 xl:h-96 2xl:h-112">
			<img src="/lawyer-person.png" alt="" className="object-contain h-60 sm:h-64 lg:h-72 xl:h-96 2xl:h-112"/>
            {/* <Image src="/lawyer-person.png" alt="hero" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"/> */}
        </div>
		<div className='grid padding-x pl-5 justify-items-center lg:justify-items-start lg:text-start text-center  content-center my-3 text-malachite-950'>
            <h1 className='2xl:text-[40px] sm:text-[24px] text-[12px] font-extrabold'>
                Trust your problem to us
            </h1>
            <p className='text-[15px] text-black-100 mt-5 uppercase font-semibold'>
                Tell us your case and discuse about the solution <br/>
                Let's make Appointment
            </p>
            {/* <CustomButton 
                title="Search Lawyer" 
                btnType='button'
                containerStyle="w-fit my-2 bg-indigo-400 hover:bg-white hover:text-teal-800 text-white rounded-full py-3 px-8 shadow-md hover:shadow-2xl xl:mt-10 transition duration-500"
                handleClick={()=>{handleScroll}}
            /> */}
        </div>
	</div>
  )
}

export default HeroFindLawyer

// Make my own
