"use client";
import Image from "next/image";
import React from "react";
import { CustomButton } from ".";
import Link from 'next/link'


const listLawyer = [
  {
    name: "Tyko Zidane Badhawi S.H",
    date: "10/10/2023",
    image: "/tyko-image.jpg"
  },
  {
    name: "Reza Maulana S.H",
    date: "15/07/2022",
    image: "/tyko-image.jpg"
  },
  {
    name: "Saraya S.H",
    date: "04/11/2021",
    image: "/tyko-image.jpg"
  },
  {
    name: "Asti Rin S.H",
    date: "01/02/2022",
    image:"/tyko-image.jpg"
  }
]

function Lawyer() {
  const handleScroll = () => {};
  return (
    <div className=" w-full h-full my-10 md:my-20">
      <div className="grid text-center place-content-center justify-center  m-3 text-malachite-950">
        <h1 className="2xl:text-[38px] sm:text-[34px] text-[20px] font-extrabold mb-3 uppercase">
          Our extraordinary Lawyer
        </h1>
        <p className="text-[14px] sm:text-[15px] xl:text-[16px]   uppercase font-semibold">
          with this team, we will help you out 
        </p>
      </div>
      <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center  gap-3 items-center p-4 ">
        {listLawyer.map((data, index) => (
          <div className="bg-white grid grid-rows-5 rounded-lg shadow-lg max-w-[330px] min-w-[288px]">
          <div className="row-span-3 relative w-full">
            <Image
              src={data.image}
              alt="asdasd"
              fill
              className="rounded-t-lg object-cover"
            />
          </div>
          <div className="p-6 h-[200px] row-span-2 grid grid-rows-3">
            <h2 className="font-bold mb-2 text-lg ">{data.name}</h2>
            <p className=" mb-2">Start be a lawyer at {data.date}</p>
            {/* <CustomButton 
                title="detail" 
                btnType='button'
                containerStyle=" bg-indigo-400 hover:bg-white hover:text-teal-800 text-white rounded-full py-3 px-4 shadow-md hover:shadow-2xl transition duration-500 w-fit"
                handleClick={()=>{handleScroll}}
            /> */}
          </div>
        </div>
        ))}
        
      </div>
      <div className="flex justify-end text-right w-full pr-5 text-blue-500">
          <Link href="/find-lawyer">search more</Link>
        </div>
    </div>
  );
}

export default Lawyer;
