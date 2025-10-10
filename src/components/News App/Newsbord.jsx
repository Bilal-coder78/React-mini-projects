import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'

function Newsbord({category}) {
    const [articles,setArticles] = useState([])
    
    const fetchNews = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        const response =await fetch(url)
        const data = await response.json();
        console.log(data.articles)
        setArticles(data.articles)
    }

    useEffect(()=>{
        fetchNews();
    },[category])

    return (
        <>
            <div className='text-center fs-3'>Today <span className='bg-danger badge my-3'>News</span></div>
            {articles.map((v,i)=>{
                    return(
                    <Newsitem key={i} title={v.title} description={v.description} src={v.urlToImage} url={v.url}/>
                    )
            })}
        </>
    )
}

export default Newsbord