import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import PlaylistFull from "./Pages/PlaylistFull";
import Error from "./Pages/Error";
import ShowAll from "./Pages/ShowAll";

export default function Router() {
  return (
    <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/*" element={<Error/>}></Route>
            <Route path="/section/0JQ5DAnM3wGh0gz1MXnu3B" element={<ShowAll/>}></Route>
            <Route path="/playlist/:playlistId" element={<PlaylistFull/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
