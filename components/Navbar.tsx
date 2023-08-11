"use client";

import React, {useState} from 'react'
import Image from "next/image"
import Link from 'next/link'
import Modal from "./auth/modal-login"
import { CustomButton } from '.'


function Navbar({onLogin, onRegister}:any) {
    const handleOpenLoginClick = () => {
        onLogin();
    };
    const handleOpenRegisterClick = () => {
        onRegister();
    };
    const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <header className=' w-full rounded-b-xl z-10 bg-gradient-to-r
    from-malachite-200
    via-malachite-400
    to-malachite-600'>
        <nav className='hidden  max-w-[1440px] mx-auto md:flex justify-between items-center sm:px-16 px-3 py-3'>
            <div>
                <Link href={"/"} className='flex justify-center items-center'>
                <Image src="/logotyko.png" alt="Logo" width={90} height={18} className='object-contain hover:scale-105' />
            </Link>
            </div>
            <div className='flex items-center'>
                <Link href={"/"} className='lg:px-5 font-bold text-white hover:text-teal-800 text-[20px] hover:underline'>Home</Link>
                <Link href={"/find-lawyer"} className='lg:px-5 font-bold text-white hover:text-teal-800 text-[20px] hover:underline'>Find Lawyer</Link>
                <Link href={"/article"} className='lg:px-5 font-bold text-white hover:text-teal-800 text-[20px] hover:underline'>Article</Link>
            </div>
            <div className='flex'>
                <CustomButton
                title="Sign In"
                btnType="button"
                containerStyle=' bg-teal-100 hover:bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500 mx-2'
                handleClick={()=>{handleOpenLoginClick()}}
            />
            <CustomButton
                title="Sign Up"
                btnType="button"
                containerStyle='mx-2 bg-teal-100 hover:bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500'
                handleClick={()=>{handleOpenRegisterClick()}}
            />
            </div>
            
        </nav>
        <nav className='md:hidden'>
        <div className='grid grid-rows-1 grid-cols-2 items-center justify-items-start'>
                <Link href={"/"} className='flex justify-center items-center'>
                <Image src="/logotyko.png" alt="Logo" width={90} height={18} className='object-contain hover:scale-105' />
            </Link>
            <div className=' justify-self-end pr-10'>
                {openNavbar === true ? 
                (<img src={"/close.png"} alt="foto article" className="w-[20px] h-[20px] object-cover rounded-xl" onClick={()=> setOpenNavbar(false)} />) : 
                (<img src={"/navigation-bar.png"} alt="foto article" className="w-[30px] h-[30px] object-cover rounded-xl" onClick={()=> setOpenNavbar(true)}/>)
                }
            </div>
            
        </div>
            {openNavbar && (
                <div className="w-full" id="menu">
                <ul
                  className="
                    text-base text-gray-700
                    pt-4 pl-5"
                >
                  <li>
                  <Link href={"/"} className='px-5 py-3 font-bold text-malachite-950 hover:text-teal-800 text-[20px] hover:underline'>Home</Link>
                
                  </li>
                  <li>
                  <Link href={"/find-lawyer"} className='px-5 py-3 font-bold text-malachite-950 hover:text-teal-800 text-[20px] hover:underline'>Find Lawyer</Link>
                
                  </li>
                  <li>
                  <Link href={"/article"} className='px-5 py-3 font-bold text-malachite-950 hover:text-teal-800 text-[20px] hover:underline'>Article</Link>
                  </li>
                  <li className='flex py-5'>
                    <div className='px-5 py-1 text-malachite-950 hover:text-white rounded-full bg-white hover:bg-malachite-900'>
                        <a
                      className="block  "
                      onClick={()=>{handleOpenLoginClick()}}
                      >Sign In</a>
                    </div>
                    <div className='px-5 py-1 ml-5 text-malachite-950 hover:text-white rounded-full bg-white hover:bg-malachite-900'>
                        <a
                      className="block"
                      onClick={()=>{handleOpenRegisterClick()}}
                      >Sign Up</a>
                    </div>
                  </li>
                </ul>
              </div>
            )}
        
        </nav>
    </header>
  )
}

export default Navbar


// //Themplate
// import { useState } from 'react'

// function NavLink({to, children} : any) {
//     return <a href={to} className={`mx-4`}>
//         {children}
//     </a>
// }

// function MobileNav({open, setOpen}: any) {
//     return (
//         <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
//             <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
//                 <a className="text-xl font-semibold" href="/">LOGO</a>
//             </div>
//             <div className="flex flex-col ml-4">
//                 <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
//                     About
//                 </a>
//                 <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
//                     Contact
//                 </a>
//             </div>  
//         </div>
//     )
// }

// export default function Navbar() {

//     const [open, setOpen] = useState(false)
//     return (
//         <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
//             <MobileNav open={open} setOpen={setOpen}/>
//             <div className="w-3/12 flex items-center">
//                 <a className="text-2xl font-semibold" href="/">LOGO</a>
//             </div>
//             <div className="w-9/12 flex justify-end items-center">

//                 <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
//                     setOpen(!open)
//                 }}>
//                     {/* hamburger button */}
//                     <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
//                     <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
//                     <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
//                 </div>

//                 <div className="hidden md:flex">
//                     <NavLink to="/contact">
//                         CONTACT
//                     </NavLink>
//                     <NavLink to="/about">
//                         ABOUT
//                     </NavLink>
//                 </div>
//             </div>
//         </nav>
//     )
// }