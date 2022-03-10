import React from 'react'
import './Monuments.css'
export default function Card({each}) {
  return (
    <div key={each._id} className='Monuments_Card_Container'>
    <img alt={each.id} src={each.img_url}></img>
    <div className='Cards_topics'>
        <div className='Cards_Sub_topics'>
            <p>{each.name}</p>
            <div>₹ {each.adult_price}</div>
        </div>
        <div className='Card_place'>{each.state}</div>
    </div>
    
  </div>
  )
}
