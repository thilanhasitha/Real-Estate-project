import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {

    const [formData,setFormData] = useState({})
    const handleChange = (e)=>{
     setFormData({
        ...formData,
        [e.target.id]: e.target.value,
     });
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await fetch('/api/auth/sign-up',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formData),
            }
        );
        const data = await res.json();
        console.log(data);
    }

    console.log(formData);
    
     return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-17'>Sign Up</h1>
        <form onSubmit={handleSubmit} className= 'flex flex-col gap-5'>
            <input type='text' placeholder='UserName'className='border p-3 rounded-lg'id='username'onChange={handleChange}/>
              <input type='text' placeholder='Email'className='border p-3 rounded-lg'id='email'onChange={handleChange}/>
                <input type='text' placeholder='Password'className='border p-3 rounded-lg'id='password'onChange={handleChange}/>

        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 pl-20 pr-20 disabled:opacity-80'>Sign Up</button>
        </form>
        <div className='flex gap-15 mt-5'>
            <p>Have an Account?</p>
            <Link to='/sign-in'>
            <span className='text-blue-700'>Sign In</span>
            </Link>
        </div>
    </div>
  )
}
