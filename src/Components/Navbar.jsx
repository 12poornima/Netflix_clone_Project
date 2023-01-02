import React from 'react'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" className='net' alt="" />
                </div>
                <div className="black">
                    <div className="red">
                        <div className="white">
                            <div className="list">
                                <li>Home</li>
                                <li>Series</li>
                                <li>Movies</li>
                                <li>New and Popular</li>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar