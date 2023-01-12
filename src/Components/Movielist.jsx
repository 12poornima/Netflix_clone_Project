import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleMovieCard from './SingleMovieCard';


function Movielist(props) {
    const [allMovies, setAllMovies] = useState([])
    const fetchCategoryMovies = async () => {
        let response = await axios.get(props.categeoryUrl)
        console.log(response.data)
        setAllMovies(response.data.results)
    }
    useEffect(() => {
        fetchCategoryMovies()
    }, [])
    return (
        <div className='movies-container' >
            <div>
                <h1 className='movies-header' >{props.categeory}</h1>
            </div>
            <div className='allcard-list' >
                {
                    allMovies.map((movieObj) => {
                        return <SingleMovieCard movieObj={movieObj} />
                    })
                }

            </div>
        </div>
    )
}

export default Movielist