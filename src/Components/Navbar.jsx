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
      {/* <header className="flex py-5 top-0">
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
      </header> */}
      {/* <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions>
        </Descriptions.Item>
    </PageHeader>
  </div> */}
      <header>
        <nav className=" px-4 lg:px-6 py-2.5 text-white fixed">
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
            <div className="relative left-[40rem]">
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
