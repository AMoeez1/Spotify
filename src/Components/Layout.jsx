import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function Layout({ children }) {
  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full h-screen grid grid-cols-[min-content_auto] grid-rows-[7fr_1fr] bg-black">
      <Sidebar/>
      <div className="bg-[#121212] space-x-5">
        <Navbar/>
        {children}
      </div>

        {/* Children */}

        {/* Footer */}
      <div className="col-span-2 bg-yellow-500">Player</div>
    </div>
    </div>
  )
}

export default Layout