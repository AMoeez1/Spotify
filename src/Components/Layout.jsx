import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function Layout({ children }) {
  return (
    <div className="">
      <Navbar/>
      <Sidebar/>
        {/* Children */}
        {children}
        {/* Footer */}
    </div>
  )
}

export default Layout