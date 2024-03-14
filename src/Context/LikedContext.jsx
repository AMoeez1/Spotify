import { createContext, useState } from "react";
import Data from '../Data/PlaylistData';



const initialLikedState = {
    songs: [],
    total: 0
};

export const LikedContext = createContext(initialLikedState);

export const LikedProvider = ({ children }) =>{
    const [songs, setSongs] = useState([]);
    const [total, setTotal] = useState(0);

    const addToLikedSong = (id) =>{
        const item = Data.filter((item)=> item.id == id)[0];
        const newItem = [...songs, {...item, }];
        setSongs(newItem);
    }

    const ContextValue = {
        songs,
        addToLikedSong,
    }

    return (
        <LikedContext.Provider value={ContextValue}>{children}</LikedContext.Provider>
    )
}
