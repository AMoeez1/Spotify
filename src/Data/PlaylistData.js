import {v4 as uuidv4} from 'uuid'

import Daily1 from '../assets/Playlist/Daily1.jfif'
import Daily2 from '../assets/Playlist/Daily2.jfif'
import Daily3 from '../assets/Playlist/Daily3.jfif'
import Daily4 from '../assets/Playlist/Daily4.jfif'
import Doorie from '../assets/doorie.jfif'

const PlaylistData = [
    {
        id: '98fc3d7a-d767-4159-aba7-6893ab2ec754',
        title: 'Daily Mix 1',
        cover: Daily1,
        bgColor: 'bg-gradient-to-r from-blue-900 via-cyan-900 to-sky-900',
        artist: [
            'Juice Wrld, ', 'Nippsey Hustle, ', '2pac, ', '& more'
        ]
    },
    {
        id: '1a66e4a0-87a1-4644-a9af-a4a09ad66fb5',
        title: 'Daily Mix 2',
        cover: Daily2,
        bgColor: 'bg-gradient-to-r from-red-900 via-cyan-900 to-pink-900',
        artist: [
            'Atif Aslam, ', 'Talha Anjum, ', 'KK, ', '& more'
        ]
    },
    {
        id: 'c161f6fd-5dd0-4a27-8672-43b315f104ca',
        title: 'Daily Mix 3',
        bgColor: 'bg-gradient-to-r from-green-900 via-cyan-900 to-sky-400',
        cover: Daily3,

        artist: [
            'String, ', 'Jal The Band, ', 'Danish Roomi ', '& more'
        ]
    },
    {
        id: 'b2072b8a-9595-495f-8fc6-ef526e59053e',
        title: 'Daily Mix 4',
        cover: Daily4,
        bgColor: 'bg-gradient-to-r from-purple-900 via-magenta-900 to-sky-900',
        artist: [
            'Stephen Sanchez, ', 'One Direction, ', 'Bruno Mars, ', '& more'
        ]
    },
    {
        id: 'e26257a6-f8b8-414a-aca9-35936be787af',
        title: 'Doorie',
        cover: Doorie,
        artist: 'Atif Aslam'
    }
]

export default PlaylistData;