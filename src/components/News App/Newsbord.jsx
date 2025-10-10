import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'

function Newsbord() {
    const [articles,setArticles] = useState([])
    
    const fetchNews = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
        const response =await fetch(url)
        const data = await response.json();
        console.log(data.articles)
        setArticles(data.articles)
    }

    useEffect(()=>{
        fetchNews();
    },[])

    return (
        <>
            <div className='text-center fs-3'>Today <span className='bg-danger badge my-3'>News</span></div>
            {articles.map((v,i)=>{
                    return(
                    <Newsitem key={i}/>
                    )
            })}
        </>
    )
}

export default Newsbord