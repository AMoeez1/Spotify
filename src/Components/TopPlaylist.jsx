import Greetings from "./Greetings";
import TopSongs from "../Data/Songs";

function TopPlaylist() {
  return (
    <>
      <Greetings />
      <div className="grid grid-cols-3 gap-2 mt-2 cursor-pointer">
        {TopSongs.map((items, index) => {
          if (index <= 5) {
            return (
              <div
                key={items.id}
                className="flex gap-3 bg-white col-span-1 rounded-xl border shadow-lg hover:bg-gray-50"
              >
                <img
                  className="h-14 w-14 rounded-lg object-cover"
                  src={items.cover}
                  alt=""
                />
                <p className="text-lg font-medium py-3 text-gray-700 p-2">
                  {items.album}
                </p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default TopPlaylist;
