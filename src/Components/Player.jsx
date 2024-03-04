import { useEffect, useState } from "react";
import useSound from "use-sound";
import song1 from "../assets/Songs/The Night We Met - Lord Huron   Slowed To Perfection   Reverb + Lofi   13 Reasons Why   Ukiyo Music.mp3";
import { IoMdShuffle } from "react-icons/io";
import { FaBackward, FaForward, FaPlay } from "react-icons/fa";
import { TfiLoop } from "react-icons/tfi";

export default function Player() {
//   const [isPlaying, setIsPlaying] = useState(false);
  // const [play{pause, duration, sound}] = useSound(song1)
  const [curDuration, setCurDuration] = useState(0);
  const [fullDuration, setFullDuration] = useState(300);

  // useEffect to update the duration based on time
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurDuration((prevDuration) => prevDuration + 1);

      if (curDuration >= fullDuration) {
        setCurDuration(0);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [curDuration, fullDuration]);
  const finalDuration = curDuration - fullDuration;
  return (
    <div className="grid grid-cols-3 text-white">
      <div className="col-span-1">
        <h3>Song Name </h3>
        <p>Artist</p>
      </div>
      <div className="col-span-1">
        <div className="flex justify-center gap-8 my-3 justify-items-start">
          <i className="p-3">
            <IoMdShuffle className="cursor-pointer" size={25} />
          </i>
          <i className="p-3">
            <FaBackward className="cursor-pointer" size={25} />
          </i>
          <i className="bg-white text-black p-3 rounded-full cursor-pointer">
            <FaPlay className="" size={15} />
          </i>
          <i className="p-3">
            <FaForward className="cursor-pointer" size={25} />
          </i>
          <i className="p-3">
            <TfiLoop className="cursor-pointer" size={25} />
          </i>
        </div>
        <div className="flex items-center gap-4">
          <p>{curDuration}s</p>
          <div className="border bg-gray-200 border-gray-20 gap-40 rounded-lg w-[30rem] h-1"></div>
          <p>{finalDuration}s</p>
        </div>
      </div>
    </div>
  );
}
