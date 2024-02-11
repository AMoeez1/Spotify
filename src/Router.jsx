import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";

export default function Router() {
  return (
    <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
