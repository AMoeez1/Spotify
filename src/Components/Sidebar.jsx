import { Link } from "react-router-dom";
import { FaSearch, FaHome } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="absolute bg-black left-0 top-0 p-2 h-full min-w-[20rem]">
      <div className="bg-[#121212] p-3 rounded-md text-white">
        <ul className="text-left">
          <li className="p-3">
            <Link className="block space-x-10" to='/'>
              <FaHome size={25} className="inline" /> Home
            </Link>
          </li>
          <li className="p-3">
            <Link className="block space-x-10" to='search'>
              <FaSearch size={25} className="inline" /> Search
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#121212]"></div>
    </div>
  );
}

export default Sidebar;
