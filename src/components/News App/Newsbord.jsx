import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

function Newsbord({ category }) {
    const [articles, setArticles] = useState([])
    const [spinner,setSpinner] = useState(false)

    const fetchNews = async () => {
        setSpinner(true)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        const response = await fetch(url)
        const data = await response.json();
        setArticles(data.articles)
        setSpinner(false)
    }

    useEffect(() => {
        fetchNews();
    }, [category])

    return (
        <>
            <div className='text-center fs-3'>Today <span className='bg-danger badge my-3'>News</span></div>
            {spinner ? <Spinner/> :
                <>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            {articles.map((v, i) => {
                                return (
                                    <div className="col-12 d-flex justify-content-center align-items-center col-sm-auto">
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