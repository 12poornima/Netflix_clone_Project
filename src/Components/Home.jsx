import React from 'react'
import Movielist from './Movielist'
import Navbar from './Navbar'
import "./Navbar.css"
import Paragraph from './Paragraph'


function Home() {
    return (
        <div>
            <Navbar />
            <Paragraph />
            <Movielist />
        </div>
    )
}

export default Home