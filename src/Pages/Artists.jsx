import { useParams } from "react-router-dom";
import Data from "../Data/PlaylistData";
import Layout from "../Components/Layout";
import { MdVerified } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { Modal } from "antd";

export const Artists = () => {
  const [open, setOpen] = useState(false);
  const [follow, setFollow] = useState(false);
  const { artistId } = useParams();
  const artist = Data.find((artists) => artists.artistId === artistId);
  return (
    <Layout>
      <div className="h-[48rem] overflow-scroll" style={{ margin: 0 }}>
        <div className="text-white h-[40vh] ">
          <img
            src={artist.ProfieImg}
            className="w-full h-[40vh] object-cover"
            alt=""
          />
          <p className="flex gap-2 relative top-[-11rem] left-6">
            <i className="text-blue-600">
              <MdVerified size={25} relative top- />
            </i>{" "}
            Verified Artist
          </p>
          <h1 className="relative top-[-11rem] left-7 text-8xl font-bold cursor-default">
            {artist.artist}
          </h1>
          <p className="relative top-[-11rem] left-6 text-lg">
            {artist.MonthlyListeners} Monthly Listeners
          </p>
        </div>
        <div className="mx-4">
          <div className="mt-4 flex items-center gap-8">
            <div className="bg-green-500 w-16 h-16 flex justify-center items-center rounded-full cursor-pointer hover:bg-green-600 ">
              <FaPlay size={20} />
            </div>
            <p
              onClick={() => setFollow((current) => !current)}
              className={
                follow
                  ? "hidden"
                  : "py-1.5 px-6 bg-[#171717] text-white border border-gray-500 rounded-full cursor-pointer hover:border-gray-300 hover:border-[3px]"
              }
            >
              Folow
            </p>
            <p
              onClick={() => setFollow((current) => !current)}
              className={
                follow
                  ? "py-1.5 px-6 bg-[#171717] text-white border border-gray-500 rounded-full cursor-pointer hover:border-gray-300 hover:border-[3px]"
                  : "hidden"
              }
            >
              Folowing
            </p>

            <i className="text-white cursor-pointer">
              <BsThreeDots size={30} />
            </i>
          </div>
          <div className="main mt-8 text-white">
            <h1 className="text-3xl font-bold">Popular</h1>
            {artist.albums.map((album, index) => {
              if(index > 0) return
              return (
                <>
                  {album.tracks.map((track, subIndex) => {
                    if(subIndex > 3) return 
                    return (
                      <div
                        className="flex justify-between items-center gap-4 px-3 py-2 hover:bg-[#272727]"
                        key={subIndex}
                      >
                        <div className="flex items-center gap-6">
                          <p>{subIndex + 1}</p>
                          <img
                            src={album.cover}
                            className="h-12 w-12 rounded-lg"
                            alt=""
                          />
                          <p className="text-">{track.title}</p>
                        </div>
                        <div className="flex gap-80">
                          <p>{track.Streams}</p>
                          <p>{track.duration}</p>
                        </div>
                      </div>
                    );
                  })}
                </>
              );
            })}
            <div className="">
              <p className="mt-4 text-2xl font-bold">Artist Pick</p>
              <div className="">
                <img src="" className="h-64 w-80" alt="" />
              </div>
            </div>
          </div>
          <div onClick={() => setOpen(true)} className="text-white mt-6">
            <p className="text-4xl">About</p>
            <div className="bg-[#272727] h-64">
              <div className="flex justify-between">
                <img
                  src={artist.AboutImg}
                  className="w-64 rounded-full p-6"
                  alt=""
                />
                <div className="text-white pr-2 w-24 h-24 bg-blue-600 rounded-full relative right-5 top-5">
                  <p className="text-2xl relative left-7 top-2">#1</p>
                  <p className="relative left-7 flex">in the world</p>
                </div>
              </div>
            </div>
          </div>
          <Modal
            rootClassName="mz-artist-about-modal"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            contentBg="#272727"
            footer={false}
            width={1000}
          >
            <div className="bg-[#121212] text-white py-5 px-8 ">
              <div className="text-white pr-2 w-20 h-20 bg-blue-600 rounded-full ">
                <p className="text-4xl relative top left-5">#1</p>
                <p className="relative left-5 top-[-6px]">in the world</p>
              </div>
              <p className="text-4xl pt-10">{artist.Followers}</p>
              <p className="text-lg mb-8">Followers</p>
              <p className="text-4xl">{artist.MonthlyListeners}</p>
              <p className="text-lg">Monthly Listeners</p>
            </div>
          </Modal>
        </div>
      </div>
    </Layout>
  );
};
