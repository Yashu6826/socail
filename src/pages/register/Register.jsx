import React from 'react'
import './register.scss'
import {Link} from 'react-router-dom'

export default function Register() {
  return (
    <div className='register'>
      <div className='card'>
    <div className='left'>
        <h1>
            Welcome.
        </h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam laboriosam, reiciendis quis ad omnis aperiam non explicabo odio eos ea accusamus porro? Corrupti, accusamus numquam aliquam consequatur explicabo voluptatum debitis!
        </p>
        <span>
            Do you have an account
        </span>
        <Link to ='/login'>
        <button>
            Login
        </button></Link>
    </div>

    <div className='right'>
        <h1>
            Register
        </h1>
        <form>
<input type='text' placeholder='UserName'/>
<input type='email' placeholder='Name'/>
<input type='password' placeholder='password'/>
<input type='text' placeholder='Name'/>
<button>Register</button>
         
        </form>
    </div>
    
    </div></div>
  )
}
