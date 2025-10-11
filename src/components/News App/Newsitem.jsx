import React from 'react'
import image from "../../assets/OIP.jpg"

function Newsitem({ title, description, src, url }) {
    return (
        <div className="card my-2 px-2 py-2 mx-2 bg-dark" style={{ maxWidth: "18rem", height: "400px" }}>
            <img src={src ? src : image} className="card-img-top" style={{ height: "180px" }} />
            <div className="card-body text-white" style={{ height: "220px" }}>
                <h5 className="card-title">{title.slice(0, 20)}</h5>
                <p className="card-text" style={{ height: "70px", overflow: "hidden" }}>{description.slice(0, 90)}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default Newsitem