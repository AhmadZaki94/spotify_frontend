import { Route, Routes } from "react-router-dom"
import { AddNewSong } from "./AddNewSong"
import { Artist } from "./Artist"
import { Listing } from "./Listing"

export const AllRoutes = () => {


    return (
        <Routes>
            <Route path="/" element={<Listing/>} />
            <Route path="/artist" element={<Artist/>} />
            <Route path="/addsong" element={<AddNewSong/>} />
        </Routes>
    )
}