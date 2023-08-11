import Image from 'next/image'
import React from 'react'

function Step() {
  return (
    <div className=' w-full h-full my-8 md:my-20'>
        <div className='grid place-content-center justify-center text-center m-3 text-malachite-950'>
                    <h1 className='2xl:text-[38px] sm:text-[34px] text-[20px] font-extrabold mb-3 uppercase'>
                        Easy step for you 
                    </h1>
                    <p className='text-[14px] sm:text-[15px] xl:text-[16px]   uppercase font-semibold'>
                        let's find out how to use our sevices <br/> the changes can't happen until you make a move
                    </p>
                </div>
        <div className='grid grid-rows-1 md:grid-cols-2 xl:grid-cols-4 gap-5 place-content-center justify-items-center items-center p-4 justify-center'>
            <div className='bg-white shrink-0 w-64 h-72 grid grid-rows-2 gap-2 p-4 rounded-lg shadow-lg border-gray-200 border-2 hover:scale-105 duration-500 ease-in-out content-center place-items-center'>
                <div className='place-content-center relative w-[150px] h-[150px]'>
                    <Image src={"/search-image.png"} alt='Search Image' fill className='object-contain' />
                </div>
                <div className='grid grid-rows-2 place-content-center justify-center text-center'>
                    <h1 className='2xl:text-[28px] sm:text-[26px] text-[12px] font-extrabold uppercase'>
                  Search 
                    </h1>
                    <p className='text-[10px] sm:text-[11px] xl:text-[12px] pt-2 uppercase font-semibold'>
                        Search and choose a lawyer from our list
                    </p>
                </div>
            </div>
            <div className='bg-white shrink-0 w-64 h-72 grid grid-rows-2 gap-2 p-4 rounded-lg shadow-lg border-gray-200 border-2 hover:scale-105 duration-500 ease-in-out content-center place-items-center'>
                <div className='place-content-center relative w-[150px] h-[150px]'>
                    <Image src={"/chat-image.png"} alt='Search Image' fill className='object-contain' />
                </div>
                <div className='grid grid-rows-2 place-content-center justify-center text-center'>
                    <h1 className='2xl:text-[28px] sm:text-[26px] text-[12px] font-extrabold uppercase'>
                        Consult
                    </h1>
                    <p className='text-[10px] sm:text-[11px] xl:text-[12px] pt-2  uppercase font-semibold'>
                        Tell us about your case 
                    </p>
                </div>
            </div>
            <div className='bg-white shrink-0 w-64 h-72 grid grid-rows-2 gap-2 p-4 rounded-lg shadow-lg border-gray-200 border-2 hover:scale-105 duration-500 ease-in-out content-center place-items-center'>
                <div className='place-content-center relative w-[140px] h-[140px]'>
                    <Image src={"/appointment.png"} alt='Search Image' fill className='object-contain' />
                </div>
                <div className='grid grid-rows-2 place-content-center justify-center text-center'>
                    <h1 className='2xl:text-[28px] sm:text-[26px] text-[12px] font-extrabold uppercase'>
                  appointment
                    </h1>
                    <p className='text-[10px] sm:text-[11px] xl:text-[12px] pt-2  uppercase font-semibold'>
                       make appointment to meet your lawyer
                    </p>
                </div>
            </div>
            <div className='bg-white shrink-0 w-64 h-72 grid grid-rows-2 gap-2 p-4 rounded-lg shadow-lg border-gray-200 border-2 hover:scale-105 duration-500 ease-in-out content-center place-items-center'>
                <div className='place-content-center relative w-[150px] h-[150px]'>
                    <Image src={"/thumbs-up.png"} alt='Search Image' fill className='object-contain' />
                </div>
                <div className='grid grid-rows-2 place-content-center justify-center text-center'>
                    <h1 className='2xl:text-[28px] sm:text-[26px] text-[12px] font-extrabold uppercase'>
                  Done
                    </h1>
                    <p className='text-[10px] sm:text-[11px] xl:text-[12px] pt-2 uppercase font-semibold'>
                        you get the solution for your problem
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Step