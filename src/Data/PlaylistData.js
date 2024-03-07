// import { v4 as uuidv4 } from "uuid";

// import Daily1 from "../assets/Playlist/Daily1.jfif";
// import Daily2 from "../assets/Playlist/Daily2.jfif";
// import Daily3 from "../assets/Playlist/Daily3.jfif";
// import Daily4 from "../assets/Playlist/Daily4.jfif";
import Doorie from "../assets/Playlist/doorie.jfif";
import OpenLetter from "../assets/Playlist/OpenLetter.jfif";
import CokeStudio from "../assets/Playlist/cokeStudio14.jfif";
import LegendsNeverDie from "../assets/Playlist/LegendNeverDie.jfif";
import DRFL from "../assets/Playlist/DeathRaceForLove.jfif";
import GBGR from "../assets/Playlist/GoodByeGoodRiddance.jfif";
import FightingDemons from "../assets/Playlist/FightingDemons.jfif";

const PlaylistData = [
  // {
  //     id: '98fc3d7a-d767-4159-aba7-6893ab2ec754',
  //     title: 'Daily Mix 1',
  //     cover: Daily1,
  //     bgColor: 'bg-gradient-to-r from-blue-900 via-cyan-900 to-sky-900',
  //     artist: [
  //         'Juice Wrld, ', 'Nippsey Hustle, ', '2pac, ', '& more'
  //     ]
  // },
  // {
  //     id: '1a66e4a0-87a1-4644-a9af-a4a09ad66fb5',
  //     title: 'Daily Mix 2',
  //     cover: Daily2,
  //     bgColor: 'bg-gradient-to-r from-red-900 via-cyan-900 to-pink-900',
  //     artist: [
  //         'Atif Aslam, ', 'Talha Anjum, ', 'KK, ', '& more'
  //     ]
  // },
  // {
  //     id: 'c161f6fd-5dd0-4a27-8672-43b315f104ca',
  //     title: 'Daily Mix 3',
  //     bgColor: 'bg-gradient-to-r from-green-900 via-cyan-900 to-sky-400',
  //     cover: Daily3,

  //     artist: [
  //         'String, ', 'Jal The Band, ', 'Danish Roomi ', '& more'
  //     ]
  // },
  // {
  //     id: 'b2072b8a-9595-495f-8fc6-ef526e59053e',
  //     title: 'Daily Mix 4',
  //     cover: Daily4,
  //     bgColor: 'bg-gradient-to-r from-purple-900 via-magenta-900 to-sky-900',
  //     artist: [
  //         'Stephen Sanchez, ', 'One Direction, ', 'Bruno Mars, ', '& more'
  //     ]
  // },
  {
    id: "900e548a-275c-401c-aec4-0f45f8001ac8",
    title: "Doorie",
    artist: "Atif Aslam",
    bgColor: "bg-gradient-to-r from-red-900 via-rose-950 to-amber-950",
    release_date: "2004",
    cover: Doorie,
    type: 'Album',
    totalSong: 8,
    tracks: [
      {
        track_number: 1,
        title: "Doorie",
        duration: "4: 36",
        artist: "Atif Aslam",
      },
      {
        track_number: 2,
        title: "Maula",
        duration: "3: 56",
        artist: "Atif Aslam",
      },
      {
        track_number: 3,
        title: "Hum Kis Gali Ja Rahe Hain",
        duration: "5: 20",
        artist: "Atif Aslam",
      },
      {
        track_number: 4,
        title: "O Re Piya",
        duration: "4: 10",
        artist: "Atif Aslam",
      },
      {
        track_number: 5,
        title: "Yakeen",
        duration: "3: 30",
        artist: "Atif Aslam",
      },
      {
        track_number: 6,
        title: "Kuch Is Tarah",
        duration: "5: 45",
        artist: "Atif Aslam",
      },
      {
        track_number: 7,
        title: "O Mere Khuda",
        duration: "3: 56",
        artist: "Atif Aslam",
      },
      {
        track_number: 8,
        title: "Tere Liye",
        duration: "4: 20",
        artist: "Atif Aslam",
      },
    ],
  },

  {
      id: "cf65a261-2d46-4cb3-b99a-d3db4fa47191s",
      title: "Open Letter",
      artist: "Talha Anjum",
      bgColor: "bg-gradient-to-r from-red-800 via-rose-800 to-amber-900",
      release_date: "YYYY",
      cover: OpenLetter,
      type: 'Album',
      totalSong: 8,
      tracks: [
        {
          track_number: 1,
          title: "Melancholy",
          duration: "1:45",
          artist: "Talha Anjum, Umair"
        },
        {
          track_number: 2,
          title: "Happy Hour",
          duration: "3:15",
          artist: "Talha Anjum, Jokhay "
        },
        {
          track_number: 3,
          title: "At the Top",
          duration: "2:04",
          artist: "Talha Anjum, Umair", 
        },
        {
          track_number: 4,
          title: "Touch Base",
          duration: "5:02",
          artist: "Talha Anjum, Talhah Younus, Krsna, Umair"
        },
        {
          track_number: 5,
          title: "Studio Gangster",
          duration: "4:08",
          artist: "Talha Anjum, Umair, Rap Demon, Superdupersultan"
        },
        {
          track_number: 6,
          title: "Two Tone",
          duration: "2:23",
          artist: "Talha Anjum, Umair"
        },
        {
          track_number: 7,
          title: "False Prophet",
          duration: "4:19",
          artist: "Talha Anjum, Umair"
        },
        {
          track_number: 8,
          title: "Desperation",
          duration: "4:18",
          artist: "Talha Anjum, Umair"
        },
        {
          track_number: 9,
          title: "Lost In Time",
          duration: "3:34",
          artist: "Talha Anjum, Umair"
        },
        {
          track_number: 10,
          title: "Kaam Pura",
          duration: "1:42",
          artist: "Talha Anjum, Umair"
        },
        {
          track_number: 11,
          title: "Flex",
          duration: "3:39",
          artist: "Talha Anjum, Umair"
        },
        {
          track_number: 12,
          title: "Glass Half Full",
          duration: "6:34",
          artist: "Talha Anjum, JJ47, Talhah Younus, Umair"
        },
        {
          track_number: 13,
          title: "Downers At Dusk",
          duration: "4:16",
          artist: "Talha Anjum, Umair"
        },
        {
          track_number: 14,
          title: "Secrets",
          duration: "4:38",
          artist: "Talha Anjum, Umair"
        },
        {
          track_number: 15,
          title: "Open Letter",
          duration: "3:12",
          artist: "Talha Anjum, Umair"
        },
      ]
  },
  {
    id: "1b6eed3f-ed8d-4f73-a4cc-cfc94c421720",
    title: "Coke Studio 14",
    artist: "Various Artists",
    bgColor: "bg-gradient-to-r from-red-700 via-red-800 to-orange-900",
    release_date: "2024-07-15",
    cover: CokeStudio,
    type: "Album",
    totalSong: 8,
    tracks: [
      {
        track_number: 1,
        title: "Sufi Fusion",
        duration: "5:30",
        artist: "Abida Parveen, Ali Zafar"
      },
      {
        track_number: 2,
        title: "Rhythms of the Indus",
        duration: "6:45",
        artist: "Komal Rizvi, Ali Noor"
      },
      {
        track_number: 3,
        title: "Urban Folklore",
        duration: "4:20",
        artist: "Meesha Shafi, Atif Aslam"
      },
      {
        track_number: 4,
        title: "Journey to the Mountains",
        duration: "7:15",
        artist: "Bilal Maqsood, Fariha Pervez"
      },
      {
        track_number: 5,
        title: "Sufi Sway",
        duration: "5:55",
        artist: "Rahat Fateh Ali Khan, Zoe Viccaji"
      },
      {
        track_number: 6,
        title: "Eastern Euphoria",
        duration: "4:45",
        artist: "Ali Sethi, Sanam Marvi"
      },
      {
        track_number: 7,
        title: "Fusion Fiesta",
        duration: "6:30",
        artist: "Asim Azhar, Momina Mustehsan"
      },
      {
        track_number: 8,
        title: "Acapella Serenity",
        duration: "3:55",
        artist: "Strings, Zoe Viccaji"
      }
    ]
  },
  {
    id: "ba7114bc-a4a1-4183-a47f-859b4a0c1c40",
    title: "Legends Never Die",
    artist: "Juice WRLD",
    bgColor: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
    release_date: "2020-07-10",
    cover: LegendsNeverDie,
    type: "Album",
    totalSong: 21,
    tracks: [
      {
        track_number: 1,
        title: "Anxiety Anthem",
        duration: "3:55",
        artist: "Juice WRLD"
      },
      {
        track_number: 2,
        title: "Righteous",
        duration: "4:11",
        artist: "Juice WRLD"
      },
      {
        track_number: 3,
        title: "Smile",
        duration: "3:34",
        artist: "Juice WRLD, The Weeknd"
      },
      {
        track_number: 4,
        title: "Titanic",
        duration: "3:30",
        artist: "Juice WRLD"
      },
      {
        track_number: 5,
        title: "Up Up and Away",
        duration: "3:20",
        artist: "Juice WRLD"
      },
      {
        track_number: 6,
        title: "Conversations",
        duration: "3:32",
        artist: "Juice WRLD"
      },
      {
        track_number: 7,
        title: "Goodbye & Good Riddance",
        duration: "4:45",
        artist: "Juice WRLD"
      },
      {
        track_number: 8,
        title: "Wishing Well",
        duration: "3:15",
        artist: "Juice WRLD"
      },
      {
        track_number: 9,
        title: "Bad Energy",
        duration: "2:58",
        artist: "Juice WRLD"
      },
      {
        track_number: 10,
        title: "Legends",
        duration: "3:11",
        artist: "Juice WRLD"
      },
      {
        track_number: 11,
        title: "Man of the Year",
        duration: "3:55",
        artist: "Juice WRLD"
      },
      {
        track_number: 12,
        title: "Life's a Mess",
        duration: "4:02",
        artist: "Juice WRLD, Halsey"
      },
      {
        track_number: 13,
        title: "Come & Go",
        duration: "3:25",
        artist: "Juice WRLD, Marshmello"
      },
      {
        track_number: 14,
        title: "I Want It",
        duration: "2:45",
        artist: "Juice WRLD"
      },
      {
        track_number: 15,
        title: "Stay High",
        duration: "3:48",
        artist: "Juice WRLD"
      },
      {
        track_number: 16,
        title: "Hate the Other Side",
        duration: "4:00",
        artist: "Juice WRLD, Marshmello, The Kid Laroi, Polo G"
      },
      {
        track_number: 17,
        title: "I'll Be Fine",
        duration: "2:57",
        artist: "Juice WRLD"
      },
      {
        track_number: 18,
        title: "Lucid Dreams",
        duration: "4:12",
        artist: "Juice WRLD"
      },
      {
        track_number: 19,
        title: "All Girls Are the Same",
        duration: "2:48",
        artist: "Juice WRLD"
      },
      {
        track_number: 20,
        title: "Empty",
        duration: "3:12",
        artist: "Juice WRLD"
      },
      {
        track_number: 21,
        title: "End of the Road",
        duration: "3:54",
        artist: "Juice WRLD"
      }
    ]
  },
  {
    id: "d8f1b89a-5cec-4c44-8f72-05b6f4510cf9",
    title: "Death Race for Love",
    artist: "Juice WRLD",
    bgColor: "bg-gradient-to-r from-purple-900 via-purple-800 to-purpe-700",
    release_date: "2019-03-08",
    cover: DRFL,
    type: "Album",
    totalSong: 22,
    tracks: [
      {
        track_number: 1,
        title: "Empty",
        duration: "4:10",
        artist: "Juice WRLD"
      },
      {
        track_number: 2,
        title: "Maze",
        duration: "3:57",
        artist: "Juice WRLD"
      },
      {
        track_number: 3,
        title: "HeMotions",
        duration: "3:09",
        artist: "Juice WRLD"
      },
      {
        track_number: 4,
        title: "Demonz (Interlude)",
        duration: "1:14",
        artist: "Juice WRLD"
      },
      {
        track_number: 5,
        title: "Fast",
        duration: "3:27",
        artist: "Juice WRLD"
      },
      {
        track_number: 6,
        title: "Hear Me Calling",
        duration: "3:10",
        artist: "Juice WRLD"
      },
      {
        track_number: 7,
        title: "Big",
        duration: "2:55",
        artist: "Juice WRLD"
      },
      {
        track_number: 8,
        title: "Robbery",
        duration: "4:00",
        artist: "Juice WRLD"
      },
      {
        track_number: 9,
        title: "Flaws and Sins",
        duration: "3:37",
        artist: "Juice WRLD"
      },
      {
        track_number: 10,
        title: "Feeling",
        duration: "3:22",
        artist: "Juice WRLD"
      },
      {
        track_number: 11,
        title: "Syphilis",
        duration: "2:49",
        artist: "Juice WRLD"
      },
      {
        track_number: 12,
        title: "Who Shot Cupid?",
        duration: "3:34",
        artist: "Juice WRLD"
      },
      {
        track_number: 13,
        title: "Ring Ring",
        duration: "2:51",
        artist: "Juice WRLD, Clever"
      },
      {
        track_number: 14,
        title: "Desire",
        duration: "3:23",
        artist: "Juice WRLD"
      },
      {
        track_number: 15,
        title: "Out My Way",
        duration: "3:18",
        artist: "Juice WRLD"
      },
      {
        track_number: 16,
        title: "The Bees Knees",
        duration: "2:43",
        artist: "Juice WRLD"
      },
      {
        track_number: 17,
        title: "On God",
        duration: "2:28",
        artist: "Juice WRLD"
      },
      {
        track_number: 18,
        title: "10 Feet",
        duration: "2:13",
        artist: "Juice WRLD"
      },
      {
        track_number: 19,
        title: "Won't Let Go",
        duration: "2:59",
        artist: "Juice WRLD"
      },
      {
        track_number: 20,
        title: "She's the One",
        duration: "3:15",
        artist: "Juice WRLD"
      },
      {
        track_number: 21,
        title: "Rider",
        duration: "2:25",
        artist: "Juice WRLD"
      },
      {
        track_number: 22,
        title: "Make Believe",
        duration: "3:45",
        artist: "Juice WRLD"
      }
    ]
  },
  {
    id: "1b7f3e28-bf21-42d6-8ed9-3f56cc96493b",
    title: "Goodbye & Good Riddance",
    artist: "Juice WRLD",
    bgColor: "bg-gradient-to-r from-sky-500 via-sky-700 to-blue-800",
    release_date: "2018-05-23",
    cover: GBGR,
    type: "Album",
    totalSong: 17,
    tracks: [
      {
        track_number: 1,
        title: "Intro",
        duration: "1:04",
        artist: "Juice WRLD"
      },
      {
        track_number: 2,
        title: "All Girls Are the Same",
        duration: "2:48",
        artist: "Juice WRLD"
      },
      {
        track_number: 3,
        title: "Lucid Dreams",
        duration: "4:00",
        artist: "Juice WRLD"
      },
      {
        track_number: 4,
        title: "Wasted",
        duration: "4:18",
        artist: "Juice WRLD, Lil Uzi Vert"
      },
      {
        track_number: 5,
        title: "Armed and Dangerous",
        duration: "2:49",
        artist: "Juice WRLD"
      },
      {
        track_number: 6,
        title: "Black & White",
        duration: "3:04",
        artist: "Juice WRLD"
      },
      {
        track_number: 7,
        title: "Lean Wit Me",
        duration: "2:55",
        artist: "Juice WRLD"
      },
      {
        track_number: 8,
        title: "I'll Be Fine",
        duration: "3:33",
        artist: "Juice WRLD"
      },
      {
        track_number: 9,
        title: "Used To",
        duration: "2:57",
        artist: "Juice WRLD"
      },
      {
        track_number: 10,
        title: "Candles",
        duration: "3:04",
        artist: "Juice WRLD"
      },
      {
        track_number: 11,
        title: "Scared of Love",
        duration: "2:53",
        artist: "Juice WRLD"
      },
      {
        track_number: 12,
        title: "Used To",
        duration: "2:57",
        artist: "Juice WRLD"
      },
      {
        track_number: 13,
        title: "Hurt Me",
        duration: "2:58",
        artist: "Juice WRLD"
      },
      {
        track_number: 14,
        title: "I'm Still",
        duration: "3:12",
        artist: "Juice WRLD"
      },
      {
        track_number: 15,
        title: "End of the Road",
        duration: "2:57",
        artist: "Juice WRLD"
      },
      {
        track_number: 16,
        title: "Long Gone",
        duration: "2:18",
        artist: "Juice WRLD"
      },
      {
        track_number: 17,
        title: "Betrayal (Skit)",
        duration: "3:03",
        artist: "Juice WRLD"
      }
    ]
  },
  {
    id: "5bdaf2da-021d-4f2a-8f6a-628e45f744cf",
    title: "Fighting Demons",
    artist: "Juice WRLD",
    bgColor: "bg-gradient-to-r from-gray-700 via-gray-700 to-gray-600",
    release_date: "2022-11-25",
    cover: FightingDemons,
    type: "Album",
    totalSong: 15,
    tracks: [
      {
        track_number: 1,
        title: "Intro",
        duration: "1:20",
        artist: "Juice WRLD"
      },
      {
        track_number: 2,
        title: "Gone Too Soon",
        duration: "3:45",
        artist: "Juice WRLD"
      },
      {
        track_number: 3,
        title: "Wishing Wells",
        duration: "3:08",
        artist: "Juice WRLD"
      },
      {
        track_number: 4,
        title: "Fighting Demons",
        duration: "2:52",
        artist: "Juice WRLD"
      },
      {
        track_number: 5,
        title: "Hurt",
        duration: "2:59",
        artist: "Juice WRLD"
      },
      {
        track_number: 6,
        title: "Righteous Path",
        duration: "3:30",
        artist: "Juice WRLD"
      },
      {
        track_number: 7,
        title: "Darkness Within",
        duration: "4:12",
        artist: "Juice WRLD"
      },
      {
        track_number: 8,
        title: "Legacy",
        duration: "3:15",
        artist: "Juice WRLD"
      },
      {
        track_number: 9,
        title: "Broken Wings",
        duration: "3:02",
        artist: "Juice WRLD"
      },
      {
        track_number: 10,
        title: "Haunted Dreams",
        duration: "2:45",
        artist: "Juice WRLD"
      },
      {
        track_number: 11,
        title: "Healing Scars",
        duration: "3:18",
        artist: "Juice WRLD"
      },
      {
        track_number: 12,
        title: "Fading Echoes",
        duration: "3:55",
        artist: "Juice WRLD"
      },
      {
        track_number: 13,
        title: "Voices in My Head",
        duration: "2:34",
        artist: "Juice WRLD"
      },
      {
        track_number: 14,
        title: "Angel's Cry",
        duration: "3:28",
        artist: "Juice WRLD"
      },
      {
        track_number: 15,
        title: "Outro",
        duration: "1:40",
        artist: "Juice WRLD"
      }
    ]
  },  
  
  
  
  
];

export default PlaylistData;
