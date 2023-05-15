import React from 'react'
import './Header.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import IconButton from '@mui/material/IconButton';


const Header = () => {
  return (
    <div className='header'>
        <IconButton>
            <PersonOutlineOutlinedIcon fontSize='large' className='header__icon' />
        </IconButton>
        <img className="header__logo" src="logo.png" alt="header__logo" />
        <IconButton>
            <ForumOutlinedIcon fontSize='large' className='header__icon' />
        </IconButton>
    </div>
  )
}

export default Header