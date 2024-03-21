import data from '../../Data/PlaylistData'
import Greetings from "../Greetings";

function TopPlaylist() {
  return (
    <div className="">
      {/* <TopSongApi/> */}
      <Greetings/>
    <div className="flex">
      <div className="grid w-full pr-7 grid-cols-3 gap-2 mt-2 cursor-pointer">
        {data.map((items) => {
          const filteredArray = items.albums.slice(0, 5);
          return (
            filteredArray.map((album) => {
              return (
                  <div
                    key={album.id}
                    className="flex justify-start gap-1 bg-[#1A1C19] hover:bg-[#2A1C20] col-span-1 rounded-sm shadow-lg">
                    <img
                      className="h-[52px] w-[52px]  rounded-lg object-cover"
                      // src={items.cover}
                      src={album.cover}
                      alt=""
                    />
                    <p className="text-lg py-3 font-semibold md:font-bold text-[15px] text-white p-2">
                      {album.title}
                    </p>
                  </div>
                  
                  )
            })
            );
        })}
      </div>
    </div>


    </div>
  );
}

export default TopPlaylist;
