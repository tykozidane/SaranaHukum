"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const listArticle = [
  {
      title: "Pembuktian Gratifikasi Seksual dalam Pemberantasan Tindak Pidana Korupsi",
      image: "/tyoks-life.png",
      date: "10/10/2023",
      author: "Tyko Zidane Badhawi",
      categories: ["perdata", "pidana"],
      text: "Abstraksi Pembuktian dalam proses \n pemberantasan tindak pidana korupsi bukanlah hal yang mudah mengingat korupsi merupakan kejahatan yang serius, seiring perkembangan zaman menimbulkan banyaknya tindak pidana korupsi dengan strategi baru khususnya \n gratifikasi yaitu gratifikasi dengan berupa layanan seksual, terkait pembuktian gratifikasi yang berupa layanan seksual masih sangat sulit untuk dibuktikannya didalam persidangan mengingat di Negara Indonesia permasalahan yang ada kaitannya dengan seksual sangat tabu untuk dibahas dimuka umum. Yang juga menjadi problematika selanjutnya adalah didalam udang-undang Pemberantasan Tindak Pidana Korupsi khususnya di penjelasan pasal 12B ayat (1) tidak disebutkan secara terang-terangan bahwa layanan seksual masuk kedalam kategori tindak pidana gratifikasi. Bagaimana pembuktian terkait gratifikasi yang berupa layanan seksual menurut hukum acara pidana di Indonesia? Bagaimana perluasan makna gratifikasi penjelasan Pasal 12 B Ayat (1) dalam Undang-Undang Nomor 20 tahun 2001 jo Undang-Undang Nomor 31 tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi?. Jenis penelitian yuridis normatif dengan metode pendekatan perundang-undangan serta pendekatan kasus yang ada dilapangan. Hasil penelitian diperoleh pembuktian terkait gratifikasi yang berupa layanan seksual merujuk pada KUHP dan Undang-undang Tindak Pidana korupsi. Sedangkan perluasan makna gratifikasi bersifat kondisional maka gratifikasi seksual dapat masuk kedalamn pasal 12B ayat (1) sepanjang unsur-unsur tindak pidana tersebut bisa dibuktikan.",
  },
  {
      title: "Berita ke dua ceritanya",
      image: "/man-suite.png",
      date: "06/12/2022",
      categories: ["niaga", "pidana"],
      author: "Tyko Zidane Badhawi",
      text: " is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud is a UK-based fashion retailer that has nearly doubled in size since last year.is a UK-based fashion retailer that has nearly doubled in size since last year."
  },
  {
      title: "Berita ke tiga ceritanya",
      image: "/hero.png",
      date: "03/02/2023",
      categories: ["perdata", "niaga"],
      author: "Tyko Zidane Badhawi",
      text: " is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud is a UK-based fashion retailer that has nearly doubled in size since last year. is a UK-based fashion retailer that has nearly doubled in size since last year."
  },
  {
    title: "Berita Hari Nanti",
    image: "/tyoks-life.png",
    date: "10/10/2023",
    categories: ["niaga"],
    author: "Tyko Zidane Badhawi",
    text: "good News for every body in the world, New jeans have colaboration with Mcdonald is a UK-based fashion retailer that has nearly doubled in size since last year.is a UK-based fashion retailer that has nearly doubled in size since last year.",
},
{
    title: "Berita ke lima ceritanya",
    image: "/man-suite.png",
    date: "06/12/2022",
    categories: [ "pidana"],
    author: "Tyko Zidane Badhawi",
    text: " is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud is a UK-based fashion retailer that has nearly doubled in size since last year.is a UK-based fashion retailer that has nearly doubled in size since last year."
},
{
    title: "Berita ke enam ceritanya",
    image: "/hero.png",
    date: "03/02/2023",
    categories: ["perdata"],
    author: "Tyko Zidane Badhawi",
    text: " is a UK-based fashion retailer that has nearly  doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud is a UK-based fashion retailer that has nearly doubled in size since last year. is a UK-based fashion retailer that has nearly doubled in size since last year."
},
]


function Article() {
  const params = useSearchParams();
    const name = params.get("name");
    const date = params.get("date");
  //   const [dataArticle, setDataArticle] = useState();
  // function getData() {
  //   return listArticle.filter((e:any) => e.title = name);
  // }
  // useEffect(()=>{
  //   const data = getData();
  //   console.log("datanya",data);
  //   // if(data){setDataArticle(data)};
  // })
  const data = listArticle.filter((e:any) => e.title == name).map((article)=> {return article});
  // console.log("datanya",data);
  function checkAvailability(arr: [], val: any) {
    if (val == "") {
      return true;
    }
    return arr.some((arrVal: any) => val === arrVal);
  }
  return (
      <div className="w-full h-full max-w-6xl grid xl:grid-cols-7 gap-4 justify-center items-start  rounded-xl">
        <div className=" xl:col-span-5 mb-10">
          <div className="w-full p-5 grid justify-start divide-y">
              <div className=" text-[30px] font-semibold pb-4">
                {data[0].title}
              </div>
              <div className="grid gap-3 text-base text-gray-500 py-5">
                  <div>
                    {data[0].author}
                  </div>
                  <div>
                    {data[0].date}
                  </div>
                  <div className="flex">
                    {data[0].categories.map((item:any)=>(<div className="rounded-full border py-1 px-2 uppercase mr-2 bg-malachite-400 text-malachite-950">{item}</div>))}
                  </div>
                  
                  
              </div>
          </div>
          <div className="">
            <div className="flex justify-center py-5">
            <img src={data[0].image} alt="foto article" className="w-full xl:w-4/5 max-h-96 object-cover rounded-xl" />
            </div>
            <div className="whitespace-pre-line">
              {data[0].text}
            </div>
              
          </div>
        </div>
        <div className="xl:col-span-2 grid justify-center items-start divide-y mb-10  py-5 rounded-xl">
          <div className=" min-w-full text-[30px] font-semibold">
              Rekomendasi Berita Article 
            </div>
            <div className="grid gap-5 mt-2 pt-5">
              {listArticle.filter((item: any) => checkAvailability(item.categories, data[0].categories[0]))
          .filter((item, idx) => idx < 5).map((item:any) => (
            <Link href={`/article/read?name=${item.title}&date=${item.date}`}>
              <div className="rounded-xl w-full border flex items-center h-24">
                  <img src={data[0].image} alt="foto article" className=" w-20 max-h-24 object-cover rounded-xl" />
                  <div className=" grid">
                    <div className="text-[12px] font-semibold">
                      {item.title.substring(0,50)}
                      </div>
                      <div className="text-[10px]">
                        {item.author}, {item.date}.
                      </div>
                  </div>
              </div>
            </Link>
          ))
          }
            </div>
        </div>
      </div>
  );
}

export default Article;
