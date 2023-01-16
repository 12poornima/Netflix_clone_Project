import React from 'react'
import NetflixBtnPart from './NetflixBtnpart'
import NetflixPartOne from './NetflixPartOne'
import Netflixtitle from './Netflixtitle'
import "./Netflix.css"

function NetflixContanier() {
    return (
        <div className="signup-container" >
            <div className="card1" >
                <Netflixtitle />
                <NetflixBtnPart />
                <NetflixPartOne />
            </div>
        </div>
    )
}

export default NetflixContanier