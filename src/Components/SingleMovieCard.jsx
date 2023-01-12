import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import { imagebaseURL } from './Constatnts';


function SingleMovieCard({ movieObj }) {
    return (
        <div className='card' style={{ background: `url('${imagebaseURL}${movieObj.backdrop_path}')`, backgroundSize: "cover" }}>
            <div className="bottom-text">
                <h1 className='title' > {movieObj.original_title} </h1>
                <div className="icon-grp">
                    <PlayArrowIcon /><AddIcon />
                </div>
            </div>
        </div >
    )
}

export default SingleMovieCard