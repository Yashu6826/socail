import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';


export default function Navbar() {

  const{currentUser}= useContext(AuthContext);

  return (
    <div className="navbar">
    <div className="left">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>Yashsocials</span>
      </Link>
      <HomeOutlinedIcon />
     
      <GridViewOutlinedIcon />
      <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search..." />
      </div>
    </div>
    <div className="right">
      <PersonOutlinedIcon />
      <EmailOutlinedIcon />
      <NotificationsOutlinedIcon />
      <div className="user">
        {/* <img
          src={currentUser.profilePic}
          alt="/"
        /> */}
        <span>
          {/* {currentUser.name} */}
        yash
        </span>
      </div>
    </div>
  </div>
);
};
  

