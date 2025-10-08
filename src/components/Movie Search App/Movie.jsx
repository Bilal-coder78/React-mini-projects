import React, { useEffect, useState } from 'react'
import "./Movie.css"
import { CiSearch } from "react-icons/ci";
import MovieImg from "../../assets/Movie_img.jpg"

function Movie() {
    const [movie, setMovie] = useState([])
    const [query,setQuery] = useState("")
    const API_ID = "a86a50adcf9bfab796bd97a2f5e12b7d";
    const Search = async (search) => {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_ID}&query=${search}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results)
        setMovie(data.results)
    }

    const FetchAll = async ()=>{
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_ID}`;
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data.results)
    }

    useEffect(() => {
        FetchAll();
    }, [])

    const handleSearch = (e)=>{
        if(query.trim() !== ""){
            Search(query)
            setTimeout(() => {
                setQuery('')
            }, 300);
        }
    }

    const handleChange=(e)=>{
        setQuery(e.target.value)
    }

    const handleKey =(e)=>{
        if(e.key === "Enter"){
            handleSearch()
        }
    }

    let result = movie.map((i) => {
        return (
            <Box key={i.id} title={i.title} ratings={i.vote_average} image={i.poster_path} />
        )
    })

    return (
        <>
            <div className='my-3 container d-flex align-items-center justify-content-center'>
                <header className='d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='fs-1 fw-medium text-white'>Movies App</h1>
                    <div className='Search-area d-flex gap-3 align-items-center justify-content-center my-3'>
                        <input type="text" name="" className='p-3 rounded-5 fs-5' value={query} onChange={handleChange} placeholder='Search' onKeyDown={handleKey} />
                        <CiSearch className='bg-white text-muted rounded-5' onClick={handleSearch} />
                    </div>
                </header>
            </div>
            <div className='d-flex justify-content-center flex-wrap gap-5 px-4'>
                {movie.length > 0 ? result : <><h2 className='text-white text-center'>No movies found</h2></>}
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
                <img className='' src={imageUrl} alt="" />
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <h2 className='fs-4 title mt-2'>{title.length > 25 ? title.slice(0,25) + "...": title}</h2>
                    <div className='d-flex align-items-center justify-content-center gap-3 my-3'>
                        <h2 className='fs-4 pt-1'>Ratings:</h2>
                        <div className='fs-3 rating'>{ratings}</div>
                    </div>
                </div>
            </div>
    )
}