import React, { useState } from 'react'
import Navbar from './Navbar'
import Banniere from './Banniere'
import ProductCard from './ProductCard'

const Home = ({data,fnct}) => {
    const [search, setsearch] = useState("second")
  return (
    <div>
           <Navbar fnct={fnct} setsearch={setsearch}/>
           <Banniere />
           <h1>List of product</h1>
           <div className='box-product'>
           {data.map((el)=><ProductCard product={el} />)}
           </div>
    </div>
  )
}

export default Home
