"use client"
import React, { useEffect, useState } from "react";
import { CustomButton } from "..";
import Link from "next/link";

const listCategories = [
  {
    title: "All",
    value: "all"
  },
  {
    title: "Perdata",
    value: "perdata"
  },
  {
    title: "Pidana",
    value: "pidana"
  },
  {
    title: "Niaga",
    value: "niaga"
  },
]

const listArticle = [
  {
      title: "Pembuktian Gratifikasi Seksual dalam Pemberantasan Tindak Pidana Korupsi contoh aja ini kan gitu log",
      image: "/tyoks-life.png",
      date: "10/10/2023",
      categories: ["perdata", "pidana"],
      text: "Abstraksi Pembuktian dalam proses pemberantasan tindak pidana korupsi bukanlah hal yang mudah mengingat korupsi merupakan kejahatan yang serius, seiring perkembangan zaman menimbulkan banyaknya tindak pidana korupsi dengan strategi baru khususnya gratifikasi yaitu gratifikasi dengan berupa layanan seksual, terkait pembuktian gratifikasi yang berupa layanan seksual masih sangat sulit untuk dibuktikannya didalam persidangan mengingat di Negara Indonesia permasalahan yang ada kaitannya dengan seksual sangat tabu untuk dibahas dimuka umum. Yang juga menjadi problematika selanjutnya adalah didalam udang-undang Pemberantasan Tindak Pidana Korupsi khususnya di penjelasan pasal 12B ayat (1) tidak disebutkan secara terang-terangan bahwa layanan seksual masuk kedalam kategori tindak pidana gratifikasi. Bagaimana pembuktian terkait gratifikasi yang berupa layanan seksual menurut hukum acara pidana di Indonesia? Bagaimana perluasan makna gratifikasi penjelasan Pasal 12 B Ayat (1) dalam Undang-Undang Nomor 20 tahun 2001 jo Undang-Undang Nomor 31 tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi?. Jenis penelitian yuridis normatif dengan metode pendekatan perundang-undangan serta pendekatan kasus yang ada dilapangan. Hasil penelitian diperoleh pembuktian terkait gratifikasi yang berupa layanan seksual merujuk pada KUHP dan Undang-undang Tindak Pidana korupsi. Sedangkan perluasan makna gratifikasi bersifat kondisional maka gratifikasi seksual dapat masuk kedalamn pasal 12B ayat (1) sepanjang unsur-unsur tindak pidana tersebut bisa dibuktikan.",
  },
  {
      title: "Berita ke dua ceritanya",
      image: "/man-suite.png",
      date: "06/12/2022",
      categories: ["niaga", "pidana"],
      text: " is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud is a UK-based fashion retailer that has nearly doubled in size since last year.is a UK-based fashion retailer that has nearly doubled in size since last year."
  },
  {
      title: "Berita ke tiga ceritanya",
      image: "/hero.png",
      date: "03/02/2023",
      categories: ["perdata", "niaga"],
      text: " is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud is a UK-based fashion retailer that has nearly doubled in size since last year. is a UK-based fashion retailer that has nearly doubled in size since last year."
  },
  {
    title: "Berita Hari Nanti",
    image: "/tyoks-life.png",
    date: "10/10/2023",
    categories: ["niaga"],
    text: "good News for every body in the world, New jeans have colaboration with Mcdonald is a UK-based fashion retailer that has nearly doubled in size since last year.is a UK-based fashion retailer that has nearly doubled in size since last year.",
},
{
    title: "Berita ke lima ceritanya",
    image: "/man-suite.png",
    date: "06/12/2022",
    categories: [ "pidana"],
    text: " is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud is a UK-based fashion retailer that has nearly doubled in size since last year.is a UK-based fashion retailer that has nearly doubled in size since last year."
},
{
    title: "Berita ke enam ceritanya",
    image: "/hero.png",
    date: "03/02/2023",
    categories: ["perdata"],
    text: " is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud is a UK-based fashion retailer that has nearly doubled in size since last year. is a UK-based fashion retailer that has nearly doubled in size since last year."
},
]

function List() {
  const HandleArticle = () => {
    console.log("ke click");
  }
  const [filteredList, setFilteredList] = useState("");
  const [filteredCategories, setFilteredCategories] = useState("all");
  function checkAvailability(arr: [], val: any) {
    if (val == "all") {
      return true;
    }
    return arr.some((arrVal: any) => val === arrVal);
  }
  return (
    <div className='w-full rounded-xl bg-malachite-100 grid md:grid-cols-4 p-5 gap-2'>
      <div className='md:col-span-1 rounded-lg bg-white p-3 flex-row'>
      <input
              className="font-bold my-2 uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
              type="text"
              placeholder="Search"
              onChange={(e: any) => setFilteredList(e.target.value)}
            />
      <div className='flex-row my-2 mx-3'>
        <h4>Categories</h4>
        <div className="flex-wrap">
          {listCategories.map((cat: any, index: any)=> (
        <CustomButton 
          title={cat.title}
          btnType="button"
          containerStyle="bg-white hover:bg-malachite-700 text-malachite-950 hover:text-white border rounded-full py-2 px-3 mx-1 my-2 lg:mx-2 lg:my-3"
          handleClick={() => {
                setFilteredCategories(cat.value)
              }}
        />
        ))}
        </div>
        
      </div>
      </div>
      <div className='md:col-span-3 flex-row overflow-scroll h-[800px]'>
        {listArticle
        .filter((item: any) => item.title.toLowerCase().indexOf(filteredList) > -1)
        .filter((item: any) => checkAvailability(item.categories, filteredCategories))
        .map((data:any, index:any)=> (
          <Link href={`/article/read?name=${data.title}&date=${data.date}`}>
          <div className="grid grid-cols-4 mb-2 bg-white rounded-xl content-center justify-items-center h-40" onClick={()=> {HandleArticle()}}>
            <div className=" col-span-1 rounded-xl h-40">
              <img src={data.image} alt="foto article" className="w-40 h-40 object-contain rounded-xl" />
            </div>
            <div className="col-span-3 justify-self-start grid gap-2 content-center pr-3">
              <h2 className="text-lg font-bold truncate"> {data.title} </h2>
              <p className=" text-sm text-gray-700 truncate"> {data.text.substring(0, 200)}</p>
              <span className=" text-sm text-gray-500"> {data.date} </span>
              <div className="flex justify-end mx-5">
              {data.categories.map((cat: any)=> (
                <div className=" rounded-full mr-2 px-3 py-1 bg-malachite-800 text-white">
                   {cat} 
                </div>
              ))}
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default List