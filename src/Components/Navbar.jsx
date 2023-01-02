import React from 'react'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
                </div>

                <div className="list">
                    <a href="#home"> <li>Home</li></a>
                    <a href="#series">  <li>Series</li></a>
                    <a href="#movies">   <li>Movies</li></a>
                    <a href="#new and popular">  <li>New and Popular</li></a>
                </div>
                <div className='srch' >
                    <input type="text" placeholder='Search' />

                </div>

            </nav>
        </div>
    )
}

export default Navbar