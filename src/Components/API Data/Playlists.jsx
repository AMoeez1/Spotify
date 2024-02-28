import { Link } from "react-router-dom";
import Data from "../../Data/PlaylistData";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function Playlists() {
  const name = "Abdul Moeez";
  const [play, setPlay] = useState(false);
    const mouseEnter = event => {
      setPlay(current => !current);
    };
    const mouseLeave = event => {
      setPlay(current => !current);
    };
  return (
    <div className="text-white mt-10">
      <div className="flex">
        <h1 className="text-2xl hover:underline">Made For {name}</h1>
        <Link className="ml-auto items-center mr-10 text-[#a7a7a7] hover:underline hover:text-gray-300">
          Show All
        </Link>
      </div>
      <div className="grid grid-cols-12">
        {Data.map((item, index) => {
          if (index <= 3) {
            return (
              <Link
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                key={index}
                className="mt-2 col-span-3 bg-[#141414] hover:bg-[#272727] w-56 h-68 p-4 rounded-xl transition-all"
                to={`/playlist/${item.id}`}
              >
                <img src={item.cover} className="h-42 w-42 rounded-xl" alt="" />
                <div className="flex">
                  <p className="text-lg my-3">{item.title}</p>  
                  <div className="ml-auto my-auto text-xl bg-green-600 text-black rounded-full animate-bounce">
                    <button className="">
                    <FaPlay className={play ? "block mx-3 my-2" : "hidden"} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-[#a7a7a7]">{item.artist}</p>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
