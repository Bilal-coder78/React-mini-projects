import React, { useEffect, useState } from 'react'
import "./Movie.css"
import { CiSearch } from "react-icons/ci";
import MovieImg from "../../assets/Movie_img.jpg"

function Movie() {
    const [movie, setMovie] = useState([])
    const API_ID = "a86a50adcf9bfab796bd97a2f5e12b7d";
    const Search = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_ID}&query=inception`);
        const data = await response.json();
        console.log(data.results)
        setMovie(data.results)
    }
    useEffect(() => {
        Search();
    }, [])

    let result = movie.map((i) => {
        return (
            <Box key={i.id} title={i.title} ratings={i.vote_average} image={i.poster_path} />
        )

    })

    return (
        <>
            <div className='my-3 container d-flex align-align-items-center justify-content-center'>
                <header className='d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='fs-1 fw-medium text-white'>Movies App</h1>
                    <div className='Search-area d-flex gap-3 align-items-center justify-content-center my-3'>
                        <input type="text" name="" className='p-3 rounded-5 fs-5' placeholder='Search' />
                        <CiSearch className='bg-white text-muted rounded-5' />
                    </div>
                </header>
            </div>
            <div className='d-flex justify-content-center flex-wrap gap-5 px-4'>
                {result}
            </div>
        </>
    )
}

export default Movie


function Box({ title, ratings, image }) {
    const imageUrl = image
        ? `https://image.tmdb.org/t/p/w200${image}`
        : MovieImg;
    return (
            <div className='Box-data text-white my-4'>
                <img src={imageUrl} alt="" />
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <h2 className='fs-4 title'>{title.length > 25 ? title.slice(0,25) + "...": title}</h2>
                    <div className='d-flex gap-3 my-3'>
                        <h2>Ratings:</h2>
                        <div className='fs-3 rating'>{ratings}</div>
                    </div>
                </div>
            </div>
    )
}