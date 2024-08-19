import React, { useState } from 'react'
import './Navbar.css'
import AddProduct from './AddProduct'
import { Link } from 'react-router-dom'

const Navbar = ({fnct,setsearch}) => {
  const [show, setshow] = useState(false)

  return (
    <div className='box-add'>
    <div className="box-navbar">
        <h1>Market<span>Hit</span></h1>
        <div className='box-search'>
            <input type='text'placeholder='search' onChange={(e)=>setsearch(e.target.value)}/>
        </div>
        <div className='box-icon'>
       <Link to='/add'> <i class="fa-solid fa-plus" onClick={()=>setshow(!show)}></i></Link>
        <Link to='/'><i class="fa-solid fa-user"></i></Link>
        </div>
    </div>

    {show? (<div className='box-form'><AddProduct fnct={fnct}/></div>):null}
    </div>
  )
}

export default Navbar
