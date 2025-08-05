import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
    

 return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-17'>Sign In</h1>
        <form  className= 'flex flex-col gap-5'>
            <input type='text' placeholder='UserName'className='border p-3 rounded-lg'id='username'/>
              {/* <input type='text' placeholder='Email'className='border p-3 rounded-lg'id='email'/> */}
                <input type='text' placeholder='Password'className='border p-3 rounded-lg'id='password'/>

        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 pl-20 pr-20 disabled:opacity-80'>Sign Up</button>
        </form>
        <div className='flex gap-15 mt-5'>
            <p>Don't Have an Account?</p>
            <Link to='/sign-up'>
            <span className='text-blue-700'>Sign Up</span>
            </Link>
        </div>
    </div>
  )
}
