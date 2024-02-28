import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaBars, FaBookOpen, FaPlus } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";
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

  const [width, setWidth] = useState(340);
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
    <div className="flex">
      <div className="min-w-[300px] max-w-[50rem] p-3" style={{ width: `${width / 16}rem`}}>
          <div className="bg-[#121212] text-gray-50 py-3 px-5 rounded-md ">
            {Data.map((items, index) => {
                return (
                  <ul key={index} className="text-left">
                    <li className="py-3">
                      <Link className="flex gap-x-4 items-center" to="/">
                        {items.icon}{" "}
                        <span className="">{items.Title}</span>
                      </Link>
                    </li>
                  </ul>
                );
            })}
          </div>
          <div className="bg-[#121212] items-center mt-3 py-3 px-5 rounded-md text-gray-50">
          <div className="flex items-center gap-x-2 ">
            <div className="flex">
              <FaBookOpen size={25} />
              <span className="ml-2  cursor-pointer">Your Library</span>
            </div>
            <div className="flex ml-auto cursor-pointer">
              <FaPlus size={35} className="py-2 "/>
              <FaArrowRight size={35} className="py-2 "/>
            </div>
          </div>
          <div className="flex mt-5 gap-x-4">
            <button className="border-[transparent] bg-white text-black rounded-full py-1 px-3 ">
              Playlist
            </button>
            <button className="border-[transparent] bg-white text-black rounded-full py-1 px-3 ">
              Artist
            </button>
            <button className="border-[transparent] bg-white text-black rounded-full py-1 px-3 ">
              Albums
            </button>
          </div>
          <div className="flex items-center mt-5 text-[#828282]">
            <TfiSearch size={20} className="cursor-pointer" />
            <div className="flex cursor-pointer items-center gap-x-2 ml-auto ">
              <span className=""> Recent</span>
              <FaBars size={20} />
            </div>
          </div>
        </div>
        

      </div>

      {/* Handle */}
      <div
        className="w-2 cursor-col-resize bg-gray-900"
        onMouseDown={() => {
          isResized.current = true;
        }}
      />
    </div>

    </>
  );
}

