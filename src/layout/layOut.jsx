import React from 'react'
import LeftBar from '../components/leftBar/LeftBar'
import Rightbar from '../components/rightBar/Rightbar'
import Navbar from '../components/navBar/Navbar'
import Home from '../pages/home/Home'
import {
    Routes,
    Outlet,
    Route,
    BrowserRouter,
  } from "react-router-dom";

export default function layOut() {
    return (<>
       <Navbar />
       <div style={{display:'flex'}}>
        <LeftBar />
        <div style={{flex:6}}>
        <Home/></div>
        <Rightbar />

       </div>
       </>
       );
     }
     
