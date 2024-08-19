import React, { useState } from 'react'
import './Addproduct.css'

const AddProduct = ({fnct}) => {
    const [newproduct, setnewproduct] = useState({
        name:"",
        price:"",
        image:""
    })
  return (
    <div class="container">
    <form>  
      <div class="group">      
        <input type="text"  onChange={(e)=>setnewproduct({...newproduct,name:e.target.value})}/>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Name</label>
      </div>
        
      <div class="group">      
        <input type="text" onChange={(e)=>setnewproduct({...newproduct,price:e.target.value})}/>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>price</label>
      </div>
        <div class="group">      
        <input type="text" onChange={(e)=>setnewproduct({...newproduct,image:e.target.value})}/>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>image</label>
      </div>
    </form>
      <button onClick={()=>fnct(newproduct)}>Submit</button>  
   
    
  </div>
  )
}

export default AddProduct
