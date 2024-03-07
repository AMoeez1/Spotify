
import TopSongs from '../../Data/Songs'
import doorie from '../../assets/Playlist/doorie.jfif'
import Greetings from "../Greetings";

function TopPlaylist() {
  return (
    <div className="pt-12">
      {/* <TopSongApi/> */}
      <Greetings/>
    <div className="flex">
      <div className="grid w-full pr-7 grid-cols-3 gap-2 mt-2 cursor-pointer">
        {TopSongs.map((items, index) => {
          if (index <= 5) {
            return (
              <div
                key={items.id}
                className="flex justify-start gap-1 bg-[#1A1C19] hover:bg-[#2A1C20] col-span-1 rounded-sm shadow-lg">
                <img
                  className="h-[52px] w-[52px]  rounded-lg object-cover"
                  // src={items.cover}
                  src={doorie}
                  alt=""
                />
                <p className="text-lg py-3 font-semibold md:font-bold text-[15px] text-white p-2">
                  {items.album}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>


    </div>
  );
}

export default TopPlaylist;
