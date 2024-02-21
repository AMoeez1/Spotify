import { Link } from "react-router-dom";
import {
  IoIosNotifications,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-white">
      <header className="flex py-5 top-0">
        <div className="flex items-center">
          <div className="mx-auto flex">
            <IoIosArrowForward size={25} />
            <IoIosArrowBack size={25} />
          </div>
          <div className="hidden ml-auto md:flex items-center space-x-1">
            <Link
              to=""
              className="bg-gray-900 hover:text-gray-300 hover:bg-gray-950 text-white px-4 py-1 rounded-full"
            >
              Explore Premium
            </Link>
            <Link
              to="#"
              className="bg-gray-900 hover:text-gray-300 hover:bg-gray-950 text-white px-4 py-1 rounded-full"
            >
              Install App
            </Link>
            <Link
              to="#"
              className="bg-gray-900 hover:text-gray-300 hover:bg-gray-950 text-white px-4 py-2 rounded-full"
            >
              <IoIosNotifications />
            </Link>
            <Link
              to="#"
              className="bg-gray-900 hover:text-gray-300 hover:bg-gray-950 text-white px-4 py-2 rounded-full"
            >
              <FaUser />
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-800 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
