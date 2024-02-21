import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function Layout({ children }) {
  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full h-screen grid grid-cols-[min-content_auto] grid-rows-[5fr_1fr] bg-black">
      {/* <div className="w-[1000px] bg-green-500">Sidebar</div> */}
      <Sidebar/>
      <div className="bg-red-500">Main Content</div>
      <div className="col-span-2 bg-yellow-500">Player</div>
      {/* <div className="col-span-2 bg-yellow-500">Player</div> */}
    </div>
      {/* <Navbar/> */}
      {/* <Sidebar/> */}
        {/* Children */}
        {children}
        {/* Footer */}
    </div>
  )
}

export default Layout