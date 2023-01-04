import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

export default function Login() {
  return (
    <div className='login'><div className='card'>
        <div className='left'>
            <h1>
                Hello World.
            </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam laboriosam, reiciendis quis ad omnis aperiam non explicabo odio eos ea accusamus porro? Corrupti, accusamus numquam aliquam consequatur explicabo voluptatum debitis!
            </p>
            <span>
                Don't have an account
            </span>
            <Link to='/register'>
            <button>
                Register
            </button></Link>
        </div>

        <div className='right'>
            <h1>
                Login
            </h1>
            <form>
<input type='text' placeholder='UserName'/>
<input type='password' placeholder='password'/>
<button>Login</button>
             
            </form>
        </div>
        
        </div></div>
  )
}
