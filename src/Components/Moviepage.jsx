import React from 'react'
import { useLocation } from 'react-router-dom'

function Moviepage() {
    const location = useLocation()
    console.log(location.state)
    return (
        <div>
            <h1>
                "hai"{location.state.original_title}
            </h1>
        </div>
    )
}

export default Moviepage