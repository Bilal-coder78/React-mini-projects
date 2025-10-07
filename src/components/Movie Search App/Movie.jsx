import React, { useEffect } from 'react'
import "./Movie.css"

function Movie() {
    const API_ID = "a86a50adcf9bfab796bd97a2f5e12b7d";
    const Search = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_ID}&query=inception`);
        const data = await response.json();
        console.log(data.results)
    }
    useEffect(()=>{
        Search();
    },[])
  return (
    <div>Movies App</div>
  )
}

export default Movie