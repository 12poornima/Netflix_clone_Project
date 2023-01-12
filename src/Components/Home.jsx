import React from 'react'
import { actionUrl, crimeUrl, dramaUrl, horrorUrl, musicUrl, orginalUrl } from './Constatnts'
import Movielist from './Movielist'
import Navbar from './Navbar'
import "./Navbar.css"
import Paragraph from './Paragraph'


function Home() {
    return (
        <div>
            <Navbar />
            <Paragraph />
            <Movielist categeory="Netflix Orginal" categeoryUrl={orginalUrl} />
            <Movielist categeory="Action Movies" categeoryUrl={actionUrl} />
            <Movielist categeory="Drama Movies" categeoryUrl={dramaUrl} />
            <Movielist categeory="Music Movies" categeoryUrl={musicUrl} />
            <Movielist categeory="Horror Movies" categeoryUrl={horrorUrl} />
            <Movielist categeory="Crime Movies" categeoryUrl={crimeUrl} />

        </div>
    )
}

export default Home