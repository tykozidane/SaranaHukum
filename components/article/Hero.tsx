"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const listArticle = [
    {
        title: "Berita Hari ini",
        image: "/tyoks-life.png",
        text: "good News for every body in the world, New jeans have colaboration with Mcdonald is a UK-based fashion retailer that has nearly doubled in size since last year.is a UK-based fashion retailer that has nearly doubled in size since last year.",
    },
    {
        title: "Berita ke dua ceritanya",
        image: "/man-suite.png",
        text: " is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud is a UK-based fashion retailer that has nearly doubled in size since last year.is a UK-based fashion retailer that has nearly doubled in size since last year."
    },
    {
        title: "Berita ke tiga ceritanya",
        image: "/hero.png",
        text: " is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud is a UK-based fashion retailer that has nearly doubled in size since last year. is a UK-based fashion retailer that has nearly doubled in size since last year."
    },
]

function Hero() {
    const [indexCarousel, setIndexCarousel] = useState(0);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
  
        //Implementing the setInterval method
        const interval = setInterval(() => {
            NextCarousel();
            setCount(count + 1);
        }, 5000);
  
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);
    const NextCarousel = ()=>{
        if(indexCarousel == listArticle.length-1){
            setIndexCarousel(0);
        } else {
            setIndexCarousel(indexCarousel+1);
        }
        console.log(listArticle.length);
    }
    const PrevCarousel = ()=>{
        if(indexCarousel == 0){
            setIndexCarousel(listArticle.length-1);
        } else {
            setIndexCarousel(indexCarousel-1);
        }
    }
  return (
    <div className=' mb-6 lg:mb-10'>
        {/* <!-- Carousel Body --> */}
        {/* {listArticle.map((dataa: any, index: any)=> (

        ))} */}
    <div className="relative rounded-xl block md:flex items-center bg-malachite-900 shadow-xl">
      <div className="relative w-full md:w-2/5 h-[400px] flex items-center overflow-hidden rounded-l-lg md:rounded-l-xl">
        {/* <Image className="absolute inset-0 w-full h-full object-cover object-center" src="/tyoks-life.png" fill alt=""/> */}
        <img className="object-contain" src={listArticle[indexCarousel].image} alt="sad" />
        <div className="absolute inset-0 w-full h-full bg-malachite-50 opacity-30"></div>
        
      </div>
      <div className="w-full md:w-3/5 h-full max-h-[328px] flex items-center  rounded-lg">
        <div className="p-12 md:pr-24 md:pl-16 md:py-12">
            <span className="text-malachite-50 font-semibold text-xl">{listArticle[indexCarousel].title}</span>
          <p className="text-white">{listArticle[indexCarousel].text.substring(0, 200)}...</p>
          <a className="flex items-baseline mt-3 text-orange-200 hover:text-orang-400 " href="">
            <span>Read more</span>
            <span className="text-xs ml-1">&#x279c;</span>
          </a>
        </div>
        <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-malachite-200 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
      
    </div>
    <div className='flex justify-center mt-10 gap-5'>
        <button className=" left-0 rotate-180 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline" onClick={()=> {PrevCarousel()}}>
        <span className="block">&#x279c;</span>
      </button>
      
      <button className=" right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline" onClick={()=> {NextCarousel()}}>
        <span className="block" >&#x279c;</span>
      </button>
    </div>
    
    
    </div>
  )
}

export default Hero