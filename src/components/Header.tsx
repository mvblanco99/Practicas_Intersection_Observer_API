import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=''>
      <h1 className='text-center border-b-2 font-serif font-bold py-2'>Practicas Intersection Observer Api</h1>
      <div className='flex row justify-evenly '>
        <Link to='/'><p className='font-serif font-bold py-2 hover:text-orange-400 transition duration-150 ease-in-out'>Gallery Images</p></Link>
        <Link to='/scroll'><p className='font-serif font-bold py-2 hover:text-orange-400 transition duration-150 ease-in-out'>Infinity Scroll</p></Link>
      </div>
    </div>
  )
}

export default Header