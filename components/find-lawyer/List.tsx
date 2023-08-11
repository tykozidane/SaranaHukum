"use client";
import CustomButton from "../CustomButton";
import Image from "next/image";
import { type } from "os";
import React, { useEffect, useState } from "react";

var listLawyer = [
  {
    name: "Tyko Zidane Badhawi S.H",
    date: "10/10/2023",
    image: "/tyko-image.jpg",
    categories: ["perdata"],
    data: {
      perdata: 2,
      pidana: 0,
      niaga: 0,
    },
  },
  {
    name: "Reza Maulana S.H",
    date: "15/07/2022",
    image: "/tyko-image.jpg",
    categories: ["pidana"],
    data: {
      perdata: 0,
      pidana: 1,
      niaga: 0,
    },
  },
  {
    name: "Saraya S.H",
    date: "04/11/2021",
    image: "/tyko-image.jpg",
    categories: ["perdata", "niaga"],
    data: {
      perdata: 2,
      pidana: 0,
      niaga: 3,
    },
  },
  {
    name: "Asti Rin S.H",
    date: "01/02/2022",
    image: "/tyko-image.jpg",
    categories: ["perdata", "pidana"],
    data: {
      perdata: 1,
      pidana: 1,
      niaga: 0,
    },
  },
  {
    name: "Tyko Zidane Badhawi S.H",
    date: "10/10/2023",
    image: "/tyko-image.jpg",
    categories: ["niaga", "perdata"],
    data: {
      perdata: 2,
      pidana: 0,
      niaga: 1,
    },
  },
  {
    name: "Reza Maulana S.H",
    date: "15/07/2022",
    image: "/tyko-image.jpg",
    categories: ["niaga"],
    data: {
      perdata: 0,
      pidana: 0,
      niaga: 1,
    },
  },
  {
    name: "Saraya S.H",
    date: "04/11/2021",
    image: "/tyko-image.jpg",
    categories: ["niaga", "pidana"],
    data: {
      perdata: 0,
      pidana: 1,
      niaga: 1,
    },
  },
  {
    name: "Asti Rin S.H",
    date: "01/02/2022",
    image: "/tyko-image.jpg",
    categories: ["pidana"],
    data: {
      perdata: 0,
      pidana: 1,
      niaga: 0,
    },
  },
  {
    name: "Tyko Zidane Badhawi S.H",
    date: "10/10/2023",
    image: "/tyko-image.jpg",
    categories: ["perdata"],
    data: {
      perdata: 2,
      pidana: 0,
      niaga: 0,
    },
  },
  {
    name: "Reza Maulana S.H",
    date: "15/07/2022",
    image: "/tyko-image.jpg",
    categories: ["pidana"],
    data: {
      perdata: 0,
      pidana: 1,
      niaga: 0,
    },
  },
  {
    name: "Saraya S.H",
    date: "04/11/2021",
    image: "/tyko-image.jpg",
    categories: ["perdata", "niaga"],
    data: {
      perdata: 2,
      pidana: 0,
      niaga: 3,
    },
  },
  {
    name: "Asti Rin S.H",
    date: "01/02/2022",
    image: "/tyko-image.jpg",
    categories: ["perdata", "pidana"],
    data: {
      perdata: 1,
      pidana: 1,
      niaga: 0,
    },
  },
  {
    name: "Tyko Zidane Badhawi S.H",
    date: "10/10/2023",
    image: "/tyko-image.jpg",
    categories: ["niaga", "perdata"],
    data: {
      perdata: 2,
      pidana: 0,
      niaga: 1,
    },
  },
  {
    name: "Reza Maulana S.H",
    date: "15/07/2022",
    image: "/tyko-image.jpg",
    categories: ["niaga"],
    data: {
      perdata: 0,
      pidana: 0,
      niaga: 1,
    },
  },
  {
    name: "Saraya S.H",
    date: "04/11/2021",
    image: "/tyko-image.jpg",
    categories: ["niaga", "pidana"],
    data: {
      perdata: 0,
      pidana: 1,
      niaga: 1,
    },
  },
  {
    name: "Asti Rin S.H",
    date: "01/02/2022",
    image: "/tyko-image.jpg",
    categories: ["pidana"],
    data: {
      perdata: 0,
      pidana: 1,
      niaga: 0,
    },
  },
  {
    name: "Yandi S.H",
    date: "10/10/2023",
    image: "/tyko-image.jpg",
    categories: ["perdata"],
    data: {
      perdata: 1,
      pidana: 0,
      niaga: 0,
    },
  },
  {
    name: "Bahtiar S.H",
    date: "10/10/2023",
    image: "/tyko-image.jpg",
    categories: ["perdata"],
    data: {
      perdata: 3,
      pidana: 0,
      niaga: 0,
    },
  },
];
type dataLawyer = {
  name: string;
  date: any;
  image: string;
  data: {
    perdata: any;
    pidana: any;
    niaga: any;
  };
};
function List() {
  const handleSeeMore = () => {
    let list = totalLawyer;
    setTotalLawyer(list + 9);
  };
  // const handleFilter = () => {setFilteredCategories("perdata")};
  const handleScroll = () => {
    console.log("ke clik sih");
  };
  const [filteredList, setFilteredList] = useState("");
  const [filteredCategories, setFilteredCategories] = useState("");
  const [totalLawyer, setTotalLawyer] = useState(9);
  const [indexList, setIndexList] = useState();
  const [seeMore, setSeeMore] = useState(true);
  function checkAvailability(arr: [], val: any) {
    if (val == "") {
      return true;
    }
    return arr.some((arrVal: any) => val === arrVal);
  }

  return (
    <div className=" rounded-2xl shadow-lg w-full p-5 mt-10 border-t-2">
      {/* Search Bar */}
      <div>
        <div className="flex flex-col p-2 py-6 m-h-screen">
          <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky">
            <div>
              <div className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
                <svg
                  className="h-6 w-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <input
              className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
              type="text"
              placeholder="Search"
              onChange={(e: any) => setFilteredList(e.target.value)}
            />

            {/* <div className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div> */}

            <div className="group relative cursor-pointer py-2 z-50">
              <div className="flex items-center justify-between space-x-5 bg-white px-4">
                <a className="menu-hover text-base font-medium text-black" onClick={() => {}}>
                  {filteredCategories.length > 1 ? filteredCategories : "Specialist"}
                </a>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </div>
              <div className="invisible absolute flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible ">
                <a
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  onClick={(e: any) => setFilteredCategories("")}
                >
                  semua
                </a>
                <a
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  onClick={(e: any) => setFilteredCategories("perdata")}
                >
                  Perdata
                </a>
                <a
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  onClick={(e: any) => setFilteredCategories("pidana")}
                >
                  Pidana
                </a>
                <a
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  onClick={(e: any) => setFilteredCategories("niaga")}
                >
                  Niaga
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* List Lawyer */}
      <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-3 items-center p-4">
        {listLawyer
          .filter((item: any) => item.name.toLowerCase().indexOf(filteredList) > -1)
          .filter((item: any) => checkAvailability(item.categories, filteredCategories))
          .filter((item, idx) => idx < totalLawyer)
          .map((data: any, index: any) => (
            <div className="bg-white grid grid-cols-3 rounded-lg shadow-lg max-w-[450px] min-w-[288px]">
              <div className=" relative w-full">
                <Image
                  src={data.image}
                  alt="asdasd"
                  layout="fill" // required
                  objectFit="cover"
                  sizes="(max-width: 768px) 100vw"
                  className="rounded-l-lg object-contain"
                />
              </div>
              <div className="p-2 pr-3 h-[300px] col-span-2 grid grid-rows-3 justify-items-center content-center">
                <div className="flex justify-start w-full pt-5">
                  <h2 className="font-bold mb-2 text-lg ">{data.name} </h2>
                </div>
                <div>
                  <p className=" mb-2">
                    Start be a lawyer at {data.date} <br /> Perdata : {data.data.perdata}, Pidana:{" "}
                    {data.data.pidana}, Niaga: {data.data.niaga}{" "}
                  </p>
                </div>
                <div className="w-full flex justify-end">
                  <CustomButton
                    title="detail"
                    btnType="button"
                    containerStyle="justify-self-end bg-malachite-700 hover:bg-white hover:text-malachite-950 text-white rounded-full py-2 px-3 mr-5 shadow-md hover:shadow-2xl transition duration-500 w-fit h-10"
                    handleClick={() => {
                      handleScroll();
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* Button Add List Lawyer */}
      {listLawyer
        .filter((item: any) => item.name.toLowerCase().indexOf(filteredList) > -1)
        .filter((item: any) => checkAvailability(item.categories, filteredCategories)).length >
      totalLawyer ? (
        <>
          <div className="flex justify-center text-right w-full pr-5 text-machite-950 uppercase">
            <CustomButton
              title="See more"
              btnType="button"
              containerStyle="bg-white hover:bg-malachite-700 text-malachite-950 hover:text-white rounded-full py-2 px-3"
              handleClick={() => {
                handleSeeMore();
              }}
            />
            {/* <h2 onClick={()=>{handleSeeMore()}}>see more</h2> */}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default List;
