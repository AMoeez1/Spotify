import Sidebar from "./Sidebar"

function Layout({ children }) {
  return (
    <div>
        {/* Navbar */}
        <Sidebar/>
        {/* Children */}
        {children}
        {/* Footer */}
    </div>
  )
}

export default Layout