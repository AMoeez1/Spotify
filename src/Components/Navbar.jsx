import { Link } from "react-router-dom";
import {
  IoIosNotifications,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <div className="">
      <header>
        <nav className="w-screen overflow-x-hidden text-white fixed">
          <div className="flex flex-wrap items-center
           max-w-screen-xl">
            <div className="gap-x-3 flex">
            <Link className="flex items-center justify-center border text-gray-300 border-transparent rounded-full p-1.5 bg-[#191919]">
              <IoIosArrowForward size={25} />
            </Link>
            <Link className="flex items-center justify-center border border-transparent text-gray-300 rounded-full p-1.5 bg-[#191919]">
              <IoIosArrowBack size={25} />
            </Link>

            </div>
            <div className="relative left-[25rem]">
              <ul className="flex gap-3 flex-col mt-4 font-medium lg:flex-row">
                <Link
                  to=""
                  className="bg-white text-black font-bold px-4 py-1 rounded-full hover:px-[18px]"
                >
                  Explore Premium
                </Link>
                <Link
                  to="#"
                  className="bg-[#1A1C19] hover:text-gray-300 hover:bg-[26 28 25] text-white px-4 py-1 rounded-full"
                >
                  Install App
                </Link>
                <Link
                  to="#"
                  className="bg-[#1A1C19] hover:text-gray-300 hover:bg-gray-950 text-white px-4 py-2 rounded-full"
                >
                  <IoIosNotifications />
                </Link>
                <Link
                  to="#"
                  className="bg-[#1A1C19] hover:text-gray-300 hover:bg-gray-950 text-white px-4 py-2 rounded-full"
                >
                  <FaUser />
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
