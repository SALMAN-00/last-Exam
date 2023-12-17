import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (<> 
  
     <div className='h-[5vw] w-[100vw] bg-green-700 text-white flex justify-between items-center'>
       <Link to='/home'> <img className='h-7 ml-5 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322" /></Link>
<ul className='flex items-center mr-5 gap-5'>
    <Link to ='/signup'><li>Sign up</li></Link>
    <Link to='/login' ><li>Log in</li></Link>
</ul>
     </div>

  </>
  )
}
