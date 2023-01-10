import React, { useEffect, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

function Paragraph() {
    const [movie, setMovie] = useState({})
    const imagebaseURL = "https://image.tmdb.org/t/p/original"
    const getMovieFromAPI = async () => {
        let response = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=b3758c1df364caa5811d40dcb0b0d991")
        console.log(response.data.results[3])
        setMovie(response.data.results[3])
    }
    useEffect(() => {
        getMovieFromAPI()
    }, [])
    return (
        <div>
            <div className='content' style={{ backgroundImage: `url('${imagebaseURL}${movie.backdrop_path}')` }} >

                {/* <img src="https://lumiere-a.akamaihd.net/v1/images/image_f47553c5.png" className='title' alt="" /> */}
                <h4 className='banner' >
                    <h1>{movie.original_title}</h1>
                    <span>{movie.release_date}</span>
                    <span> <i>12+</i> </span>
                    <span>1hr 55min</span>
                    <span>Action</span>
                </h4>
                <p className='para' >
                    {movie.overview}
                </p>
                <div className="buttons">
                    <button className='btn1' ><PlayArrowIcon />Play</button>
                    <button className='btn2' ><AddIcon />Add to Playlist </button>
                </div>

            </div>

        </div>
    )
}

export default Paragraph