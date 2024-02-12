import { FaArrowRight, FaBars, FaBookOpen, FaPlus,} from "react-icons/fa";
import { TfiHome, TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Navbar from './Navbar'

function Sidebar() {
  return (
    <>
    <Navbar className=''/>
      <div className="fixed bg-black left-0 top-0 p-3 h-full min-w-[25rem]">
        <div className="bg-[#121212] py-3 px-5 rounded-md text-white">
          <ul className="text-left">
            <li className="py-3">
              <Link className="flex gap-x-4 items-center" to="/">
                <TfiHome size={20} className="inline" /> <span className="text-xl">Home</span>
              </Link>
            </li>
            <li className="py-3 text-[#828282]">
              <Link className="flex gap-x-4 items-center hover:text-gray-300" to="search">
                <TfiSearch size={20} className="inline" /> <span className="text-xl ">Search</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-[#121212] items-center mt-2 py-3 px-5 rounded-md text-white">
          <div className="flex items-center gap-x-2 text-[#828282]">
            <div className="flex hover:text-gray-50">
              <FaBookOpen size={25} />
              <span className="ml-2 text-xl cursor-pointer">Your Library</span>
            </div>
            <div className="flex ml-auto cursor-pointer">
              <FaPlus size={35} className="py-2 hover:border-transparent hover:rounded-full hover:bg-[#333333]"/>
              <FaArrowRight size={35} className="py-2 hover:border-transparent hover:rounded-full hover:bg-[#333333]"/>
            </div>
          </div>
          <div className="flex mt-5 gap-x-4">
            <button className="border-[transparent] bg-[#232323] hover:[#292929] rounded-full py-1 px-3 hover:bg-[#333333]">
              Playlist
            </button>
            <button className="border-[transparent] bg-[#232323] hover:[#292929] rounded-full py-1 px-3 hover:bg-[#333333]">
              Artist
            </button>
            <button className="border-[transparent] bg-[#232323] hover:[#292929] rounded-full py-1 px-3 hover:bg-[#333333]">
              Albums
            </button>
          </div>
          <div className="flex items-center mt-5 text-[#828282]">
            <TfiSearch size={20} className="hover:text-gray-50 transition-[.7s ease]" />
            <div className="flex items-center hover:text-gray-50 gap-x-2 ml-auto transition-[.5s]">
              <span className="text-lg "> Recent</span>
              <FaBars size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
