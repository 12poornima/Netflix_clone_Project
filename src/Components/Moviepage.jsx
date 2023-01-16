import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Moviepage.css"
import { imagebaseURL } from './Constatnts';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

function Moviepage() {
    const location = useLocation();
    console.log(location.state)
    return (

        <div>
            <div className='movie-content' style={{ backgroundImage: `url('${imagebaseURL}${location.state.backdrop_path}')` }}>
                <div className='movie-list' >
                    <h4 className='banner-movie' >
                        <h1 className='head' >{location.state.original_title}</h1>
                        <span>{location.state.first_air_date
                        }</span>
                        <span> <i>12+</i> </span>
                        <span>1hr 55min</span>
                        <span>Action</span>
                    </h4>
                    <p className='paragraph' >
                        {location.state.overview}
                    </p>
                    <div className="buttons">
                        <button className='btn1' ><PlayArrowIcon />Play</button>
                        <button className='btn2' ><AddIcon />Add to Playlist </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Moviepage