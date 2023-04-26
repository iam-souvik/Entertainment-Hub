import React from 'react'
import { Route, Routes } from "react-router-dom"
import Movies from '../../Pages/Movies/Movies'
import Trending from '../../Pages/Trending/Trending'
import Series from '../../Pages/Series/Series'
import Search from '../../Pages/Search/Search'
const AllRoute = () => {
    return (
        
        <div>

            <Routes>
                <Route path="/" element={<Trending />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/search" element={<Search />} />
            </Routes>

        </div>
    )
}

export default AllRoute