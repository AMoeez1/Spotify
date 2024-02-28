import { FaSpotify } from "react-icons/fa";
import Layout from "../Components/Layout";
import PlaylistData from "../Data/PlaylistData";
import { useParams } from "react-router-dom";

import { MdWatchLater } from "react-icons/md";


function PlaylistFull() {
  const { PlaylistId } = useParams();
  const item = PlaylistData.find((prod) => prod.id === PlaylistId);

  return (
    <Layout>
      <div className="mx-[0 !important]">
        {/* {Playlist.map((item) => {
          return (  */}
        <div className="flex w-full h-80 px-8 bg-gradient-to-r from-blue-900 via-cyan-900 to-sky-900">
          <div className="pt-14 flex drop-shadow-lg">
            <img src={item?.cover} className="h-60 rounded-md " alt="" />
            <div className="mx-8 mt-10">
              <p className="px-0.5 text-white font-thin py-0">Playlist</p>
              <h1 className="px-1 py-0 text-white text-7xl font-extrabold">
                {item?.title}
              </h1>
              <p className="mt-4 text-gray-200">{item?.artist}</p>
              <div className="text-3xl text-green-600 drop-shadow-lg my-2">
                <FaSpotify />
              </div>
            </div>
          </div>
        </div>
        {/* );
        })} */}
      </div>
      <div className="p-4">
        <table className="table-auto text-white w-full">
          <thead className="">
            <tr>
              <th>#</th>
              <th className="text-start">Title</th>
              <th className="text-start">Album</th>
              <th className="text-start"><MdWatchLater /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td className="space-x-4">1</td>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default PlaylistFull;
