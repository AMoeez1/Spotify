import { Link } from "react-router-dom";
import Data from "../../Data/PlaylistData";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function Playlists() {
  const name = "Abdul Moeez";
  const [play, setPlay] = useState(false);

  return (
    <div className="text-white mt-10">
      <div className="flex">
        <h1 className="text-2xl hover:underline">Made For {name}</h1>
        <Link
          className="ml-auto items-center mr-10 text-[#a7a7a7] hover:underline hover:text-gray-300"
          to={"/section/0JQ5DAnM3wGh0gz1MXnu3B"}
        >
          Show All
        </Link>
      </div>
      <div className="grid grid-cols-12 @container">
        {Data.map((item, index) => {
          if (index <= 3) {
            return (
              item.albums.map((albums, index) =>{
                return(
              <Link
                key={index}
                className="mt-2 col-span-3 hover:bg-[#272727] w-56 h-68 p-4 rounded-xl transition-all group"
                to={`/playlist/${albums.albumID}`}
              >
                <img src={albums.cover} className="h-42 w-42 rounded-xl" alt="" />
                <div className="flex mt-2">
                  <p className="text-lg my-3">{albums.title}</p>
                  <div
                    className={`ml-auto my-auto text-xl bg-green-600 text-black rounded-full ${
                      play ? "animate-play-button" : ""
                    }`}
                  >
                    <button className="group-hover:flex hidden p-3 justify-center items-center">
                      <FaPlay />
                    </button>
                  </div>
                </div>
              <Link to={`/artist/${item.artistId}`} className="text-sm text-[#a7a7a7]">{item.artist}</Link>
              </Link>

                )
              })
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
