import {v4 as uuidv4} from 'uuid'

import Daily1 from '../assets/Playlist/Daily1.jfif'
import Daily2 from '../assets/Playlist/Daily2.jfif'
import Daily3 from '../assets/Playlist/Daily3.jfif'
import Daily4 from '../assets/Playlist/Daily4.jfif'





const PlaylistData = [
    {
        id: uuidv4(),
        title: 'Daily Mix 1',
        cover: Daily1,
        artist: [
            'Juice Wrld, ', 'Nippsey Hustle, ', '2pac, ', '& more'
        ]
    },
    {
        id: uuidv4(),
        title: 'Daily Mix 2',
        cover: Daily2,
        artist: [
            'Atif Aslam, ', 'Talha Anjum, ', 'KK, ', '& more'
        ]
    },
    {
        id: uuidv4(),
        title: 'Daily Mix 3',
        cover: Daily3,
        artist: [
            'String, ', 'Jal The Band, ', 'Danish Roomi ', '& more'
        ]
    },
    {
        id: uuidv4(),
        title: 'Daily Mix 4',
        cover: Daily4,
        artist: [
            'Stephen Sanchez, ', 'One Direction, ', 'Bruno Mars, ', '& more'
        ]
    },
]

export default PlaylistData;