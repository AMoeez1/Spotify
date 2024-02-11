import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <header className="bg-white fixed top-0 w-full">
        <nav className="container px-6 py-3">
            <div className="flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-gray-800">MyWebsite</a>
                <div className="hidden md:flex items-center space-x-1">
                  {/* <Link>Ma</Link> */}
                    <a href="#" className="bg-gray-900 hover:px-5 hover:py-2.5 text-white px-4 py-2 rounded-full">Explore Premium</a>
                    <a href="#" className="bg-gray-900 hover:text-gray-300 hover:bg-gray-950 text-white px-4 py-2 rounded-full">Install App</a>
                    <a href="#" className="bg-gray-900 hover:text-gray-300 hover:bg-gray-950 text-white px-4 py-2 rounded-full">Notification</a>
                    <a href="#" className="bg-gray-900 hover:text-gray-300 hover:bg-gray-950 text-white px-2 py-4 rounded-full">Profile</a>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Header