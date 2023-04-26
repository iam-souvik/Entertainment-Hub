import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleContent from '../../components/SingleContent/SingleContent';
// require('dotenv').config()
const Trending = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  console.log(content)

  const fetchTrending = async () => {
    const { data } = await axios.get(
     
      // `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}`
      "https://api.themoviedb.org/3/trending/all/week?api_key=080fb0d025a0da07fe0cc75e1142c517"
    );

    setContent(data.results);
  };

  useEffect(()=>{
    fetchTrending()

  },[page])

  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <div>
              <span>{c.title}</span>
            </div>
           
          ))}
      </div>
      {/* <CustomPagination setPage={setPage} /> */}
    </div>
  )
}

export default Trending
