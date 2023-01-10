import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';


function Movielist() {
    return (
        <div className='movies-container' >
            <div>
                <h1 className='movies-header' >Netflix Orginal</h1>
            </div>
            <div className='allcard-list' >
                <div className='card' >
                    <div className="bottom-text">
                        <h1 className='title' > cards  </h1>
                        <div className="icon-grp">
                            <PlayArrowIcon /><AddIcon />
                        </div>
                    </div>
                </div >
                <div className='card' >
                    <div className="bottom-text">
                        <h1 className='title' > cards  </h1>
                        <div className="icon-grp">
                            <PlayArrowIcon /><AddIcon />
                        </div>
                    </div>
                </div >
                <div className='card' >
                    <div className="bottom-text">
                        <h1 className='title' > cards  </h1>
                        <div className="icon-grp">
                            <PlayArrowIcon /><AddIcon />
                        </div>
                    </div>
                </div >
                <div className='card' >
                    <div className="bottom-text">
                        <h1 className='title' > cards  </h1>
                        <div className="icon-grp">
                            <PlayArrowIcon /><AddIcon />
                        </div>
                    </div>
                </div >
                <div className='card' >
                    <div className="bottom-text">
                        <h1 className='title' > cards  </h1>
                        <div className="icon-grp">
                            <PlayArrowIcon /><AddIcon />
                        </div>
                    </div>
                </div >
                <div className='card' >
                    <div className="bottom-text">
                        <h1 className='title' > cards  </h1>
                        <div className="icon-grp">
                            <PlayArrowIcon /><AddIcon />
                        </div>
                    </div>
                </div >

            </div>
        </div>
    )
}

export default Movielist