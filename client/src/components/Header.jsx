import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-neutral-900'>
        <div className='flex justify-between items-center max-w-6xl p-3 mx-auto'>
            <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-200'>Real</span>
            <span  className='text-slate-400'>Estate</span>
        </h1>
            </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex'>
            <input text='text'placeholder='Search  ........' className='bg-trasparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch/>
        </form>
        <ul className='flex gap-10'>
            <Link to='/'>
            <li className='text-white hidden:sm-inline hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
             <li className='text-white hidden:sm-inline hover:underline'>About</li>
             </Link>
             <Link to='sign-in'>
              <li className='text-white hidden:sm-inline hover:underline'>Sign-In</li>
              </Link>
        </ul>
        </div>
    </header>
  ) 
}
