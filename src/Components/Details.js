import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({data}) => {
    const prams=useParams()
    console.log(prams)
    const selected=data.filter((el)=>el.id==prams.id)
    console.log(selected)
  return (
    <div>
      <h1>Details</h1>
      {selected.map((selected)=>(<>
      <p>{selected.name}</p>
      <p>{selected.originalPrice}</p>
      <h3>{selected.reviews}</h3>
      </>))}
    </div>
  )
}

export default Details
