import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
                </div>


                <div className="list">
                    <a href="#home"> <li>Home</li></a>
                    <a href="#series">  <li>Series</li></a>
                    <a href="#movies">   <li>Movies</li></a>
                    <a href="#new and popular">  <li>New and Popular</li></a>
                </div>
                <div className='srch' >
                    <NotificationsNoneIcon />
                    <SearchIcon />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className='user' alt="" />
                    <ArrowDropDownIcon />

                </div>

            </nav>
        </div>
    )
}

export default Navbar