import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'

function Newsbord({ category }) {
    const [articles, setArticles] = useState([])

    const fetchNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        const response = await fetch(url)
        const data = await response.json();
        console.log(data.articles)
        setArticles(data.articles)
    }

    useEffect(() => {
        fetchNews();
    }, [category])

    return (
        <>
            <div className='text-center fs-3'>Today <span className='bg-danger badge my-3'>News</span></div>
            {articles.length === 0 ? <><h1 className='d-flex align-items-center justify-content-center mt-5'>Loading News...</h1></> :
                <>
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            {articles.map((v, i) => {
                                return (
                                    <div class="col-12 d-flex justify-content-center align-items-center col-sm-auto">
                                        <Newsitem key={i} title={v.title || "No title for that News"} description={v.description || "No description for that news"} src={v.urlToImage} url={v.url} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Newsbord