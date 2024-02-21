import { FaArrowRight, FaBars, FaBookOpen, FaPlus } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import { useEffect, useRef, useState } from "react";

export default function Sidebar() {
  const Data = [
    {
      Title: "Home",
      icon: <GoHomeFill size={20} className="inline" />,
    },
    {
      Title: "Search",
      icon: <TfiSearch size={20} className="inline" />,
    },
  ];

  const [width, setWidth] = useState(400);
  const isResized = useRef(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) {
        return;
      }

      setWidth((previousWidth) => previousWidth + e.movementX);
    });

    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });
  }, []);
  return (
    <>
    <div className="flex bg-green-500">
      <div style={{ width: `${width / 16}rem` }}>Sidebar</div>

      {/* Handle */}
      <div
        className="w-4 cursor-col-resize bg-blue-500"
        onMouseDown={() => {
          isResized.current = true;
        }}
      />
    </div>

    </>
    // <div className="grid md:grid-cols-4">
    //   <div className="">
    //       <div className="bg-gray-100 py-3 px-5 rounded-md ">
    //         {Data.map((items, index) => {
    //             return (
    //               <ul key={index} className="text-left">
    //                 <li className="py-3">
    //                   <Link className="flex gap-x-4 items-center" to="/">
    //                     {items.icon}{" "}
    //                     <span className="text-xl">{items.Title}</span>
    //                   </Link>
    //                 </li>
    //               </ul>
    //             );
    //         })}
    //       </div>
    //       <div className="bg-gray-100 items-center mt-3 py-3 px-5 rounded-md text-white">
    //       <div className="flex items-center gap-x-2 text-[#828282]">
    //         <div className="flex hover:text-gray-950">
    //           <FaBookOpen size={25} />
    //           <span className="ml-2 text-xl cursor-pointer">Your Library</span>
    //         </div>
    //         <div className="flex ml-auto cursor-pointer">
    //           <FaPlus size={35} className="py-2 hover:border-transparent hover:rounded-full hover:bg-gray-50"/>
    //           <FaArrowRight size={35} className="py-2 hover:border-transparent hover:rounded-full hover:bg-gray-50"/>
    //         </div>
    //       </div>
    //       <div className="flex mt-5 gap-x-4">
    //         <button className="border-[transparent] bg-white text-black rounded-full py-1 px-3 hover:bg-gray-50">
    //           Playlist
    //         </button>
    //         <button className="border-[transparent] bg-white text-black rounded-full py-1 px-3 hover:bg-gray-50">
    //           Artist
    //         </button>
    //         <button className="border-[transparent] bg-white text-black rounded-full py-1 px-3 hover:bg-gray-50">
    //           Albums
    //         </button>
    //       </div>
    //       <div className="flex items-center mt-5 text-[#828282]">
    //         <TfiSearch size={20} className="cursor-pointer hover:text-gray-950 transition-[.7s ease]" />
    //         <div className="flex cursor-pointer items-center hover:text-gray-950 gap-x-2 ml-auto transition-[.5s]">
    //           <span className="text-lg "> Recent</span>
    //           <FaBars size={25} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Navbar/>
    //   </div>
  );
}

