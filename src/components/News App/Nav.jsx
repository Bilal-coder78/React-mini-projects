import React from 'react'

function Nav({setCategory}) {
    return (
        <nav className="py-2 navbar navbar-expand-lg bg-body-tertiary"data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className='bg-light text-dark badge'>News App</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link pointer" onClick={()=>setCategory("general")}>Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pointer" onClick={()=>setCategory("entertainment")}>Entertainment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pointer" onClick={()=>setCategory("technology")}>Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pointer" onClick={()=>setCategory("sports")}>Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pointer" onClick={()=>setCategory("science")}>Science</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pointer" onClick={()=>setCategory("health")}>Health</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default Nav