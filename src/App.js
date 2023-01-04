import React, { useContext } from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './app.css';
import Profile from './pages/profile/Profile';
import HomePage from './homepage/homePage';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './components/context/authContext';

import {
  Routes,
  
  Route,
  
  BrowserRouter,
  
} from "react-router-dom";


export default function App() {

// const {currentUser} = useContext(AuthContext)
 
  const currentUser =true;
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to='/login'/>;
    }
    return children;
  };



  return (
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/' element={
     <ProtectedRoute>
       <HomePage/>
        </ProtectedRoute>
      }> 

       </Route>
    <Route path='/profile/:id' element={<Profile/>}></Route>
    

   </Routes>
   


   </BrowserRouter>

  );
}
