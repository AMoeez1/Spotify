import Layout from "../Components/Layout";
import Data from "../Data/PlaylistData";
import { Link } from "react-router-dom";
export default function ShowAll() {
  return (
    <Layout>
      <div className="mt-28 text-white">
        <h1 className="text-2xl">Popular Albums</h1>
      </div>
      <div className="grid grid-cols-10 ">
        {Data.map((item) => {
          return (
            item.albums.map((album) => {
              return (
            <Link
              className="col-span-2 text-white mt-2 hover:bg-[#272727] p-4 rounded-xl"
              key={album.id}
              to={`/playlist/${album.albumID}`}
            >
              <img
                src={album.cover}
                alt=""
                className="cursor-pointer rounded-lg"
              />
              <p className="mt-4 font-thin text-lg cursor-pointer">
                {album.title}
              </p>
              <p className="font-thin text-gray-400 cursor-pointer hover:underline">
                {item.artist}
              </p>
            </Link>

              )
            })
          );
        })}
      </div>
    </Layout>
  );
}
