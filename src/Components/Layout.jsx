import Navbar from "./Navbar"
import Player from "./Player"
import Sidebar from "./Sidebar"

// grid-rows-[7fr_1fr]

function Layout({ children }) {
  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full h-screen grid grid-cols-[min-content_auto] bg-black">
      <Sidebar/>
      <div className="bg-[#121212] space-x-5">
        <Navbar/>
        {children}
      </div>

        {/* Children */}

        {/* Footer */}
      <div className="col-span-2 bg-black border py-5">
        <Player/>
      </div>
    </div>
    </div>
  )
}

export default Layout