import Navbar from "./Navbar";
// import Player from "./Player"
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
        <div className="w-full h-screen-[!important] grid grid-cols-[min-content_auto] bg-black">
          <Sidebar />
          <div className="bg-[#121212] space-x-5">
            <Navbar />
            {children}
          </div>
          {/* Footer */}
          <div className="col-span-2 bg-black border fixed top-[37rem] overflow-x -hidden ">
            {/* <Player/> */}
          </div>
        </div>
  );
}

export default Layout;
