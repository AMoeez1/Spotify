import { FaHeart, FaPlay, FaSpotify } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import PlaylistData from "../Data/PlaylistData";
import Data from "../Data/Songs";

import { IoIosMore } from "react-icons/io";
import { MdWatchLater } from "react-icons/md";
import { useState } from "react";

function PlaylistFull() {
  const { playlistId } = useParams();
  const item = PlaylistData.find((prod) => prod.id === playlistId);
  const [changeColor, setChangeColor] = useState(false);

  const handleLike = (event) => {
    setChangeColor((current) => !current);
  };

  return (
    <Layout>
      <div className="" style={{ margin: 0 }}>
        {/* {Playlist.map((item) => {
          return (  */}
        <div className={`flex w-full py-10 px-8 ${item?.bgColor}`}>
          <div className="pt-14 flex drop-shadow-lg">
            <img
              src={item?.cover}
              className="h-60 rounded-md shadow-2xl"
              alt=""
            />
            <div className="mx-8 mt-10">
              <p className="px-0.5 text-white font-thin py-0">Playlist</p>
              <h1 className="px-1 py-0 text-white text-7xl font-extrabold">
                {item?.title}
              </h1>
              <p className="mt-4 text-gray-200">{item?.artist}</p>
              <div className="text-2xl flex items-center gap-1 text-[#1ed760] drop-shadow-lg my-2">
                <FaSpotify />{" "}
                <span className="text-[16px] text-white cursor-pointer hover:underline">
                  Spotify
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* );
        })} */}
      </div>
      <div
        style={{ margin: 0 }}
        className="flex items-center p-5 gap-8 bg-gradient-to-b from-cyan-900 via-[#121212]"
      >
        <i className="bg-green-500 cursor-pointer p-5 text-xl rounded-full">
          <FaPlay />
        </i>
        <i className="text-4xl cursor-pointer text-gray-400 hover:text-white">
          <FaHeart
            className={changeColor ? "text-[#1ed760]" : "text-white"}
            onClick={handleLike}
          />
        </i>
        <i className="text-4xl text-gray-400 cursor-pointer hover:text-white">
          <IoIosMore />{" "}
        </i>
      </div>
      <div className="p-4">
        <table className="table-auto text-white w-full">
          <thead className="">
            <tr>
              <th>#</th>
              <th className="text-start">Title</th>
              <th className="text-start">Album</th>
              <th className="text-start">
                <MdWatchLater />
              </th>
            </tr>
          </thead>
            {Data.map((song, index) => {
              if (index < 10) {
              return (
                <tbody key={index}>
                <tr>
                  <td className="space-x-4">{index}</td>
                  <td>
                    <p className="text-lg">{song.title}</p>
                    <p className="font-thin text-[14px] text-gray-300">{song.artist}</p>
                  </td>
                  <td>{song.album}</td>
                  <td>{song.duration}</td>
                </tr>
          </tbody>
                
                );
              }
            })}
        </table>
      </div>
    </Layout>
  );
}

export default PlaylistFull;
