import { FaHeart, FaPlay, FaSpotify } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import PlaylistData from "../Data/PlaylistData";

import { IoIosMore } from "react-icons/io";
import { MdWatchLater } from "react-icons/md";
import { useState } from "react";

function PlaylistFull() {
  const { playlistId } = useParams();
  // const item = value.albums.filter((song) => song.albumID === playlistId);
  const value = PlaylistData.find((prod) => prod.id === playlistId);
  const items = value.filter((album) => album.albums)
  
  const [changeColor, setChangeColor] = useState(false);
  const [tablePlay, setTablePlay] = useState(false);
  console.log(items)

  const handleLike = () => {
    setChangeColor((current) => !current);
  };
  const handleEnter = () => {
    setTablePlay((current) => !current);
  };
  const handleLeave = () => {
    setTablePlay((current) => !current);
  };

  

  return (
    <Layout>
      {items.map((album, index) => {
        return (
          <div key={index} className="h-[44rem] overflow-y-hidden hover:overflow-y-scroll ">
            <div className="" style={{ margin: 0 }}>
              <div className={`flex w-full py-10 px-6 ${album?.bgColor}`}>
                <div className="pt-10 flex drop-shadow-lg">
                  <img
                    src={album?.cover}
                    className="h-64 rounded-md shadow-2xl"
                    alt=""
                  />
                  <div className="mx-8 mt-10">
                    <p className="px-0.5 text-white font-thin py-0">Playlist</p>
                    <h1 className="px-1 py-0 text-white text-7xl font-extrabold">
                      {album?.title}
                    </h1>
                    <div className="flex items-center gap-2 mt-4 ">
                      <p className=" text-gray-100 cursor-pointer">
                        {album?.artist} -{" "}
                      </p>
                      <p className="text-gray-200">{album.release_date}</p>
                      <span className="font-thin text-gray-300">
                        {album.totalSong} songs,
                      </span>
                      <p className="text-gray-300 font-thin">1 hour, 30 mins</p>
                    </div>
                    <div className="text-2xl flex items-center gap-1 text-[#1ed760] drop-shadow-lg my-2">
                      <FaSpotify />{" "}
                      <span className="text-[16px] text-white cursor-pointer hover:underline">
                        Spotify
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
                <IoIosMore />
              </i>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-white">
                <thead className="text-lg text-white border-b border-gray-400">
                  <tr>
                    <th scope="col" className="py-3 text-center">
                      <span>#</span>
                    </th>
                    <th scope="col" className="pr-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="py-3">
                      <i>
                        <MdWatchLater />
                      </i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.albums.tracks.map((track) => {
                    return (
                      <tr
                        key={track.id}
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                        className="hover:bg-[#272727]"
                        style={{ transition: ".5s ease" }}
                      >
                        <th
                          scope="row"
                          className="py-4 flex justify-center relative top-2"
                        >
                          <i className={tablePlay ? "block" : "hidden"}>
                            <FaPlay size={15} />
                          </i>
                          <p className={tablePlay ? "hidden" : "block"}>
                            {track.track_number}
                          </p>
                        </th>
                        <td className="pr-6 py-4">
                          <p className="text-[17px] hover:underline">
                            <span className="hover:underline cursor-pointer">
                              {track.title}
                            </span>
                          </p>
                          <p className="text-sm font-thin text-gray-300 ">
                            <span className="hover:underline cursor-pointer">
                              {track.artist}
                            </span>
                          </p>
                        </td>
                        <td className="py-4">{track.duration}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export default PlaylistFull;
