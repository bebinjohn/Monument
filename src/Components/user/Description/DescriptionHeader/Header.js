import React from 'react'
import {useHistory} from 'react-router'
import { useSelector } from 'react-redux'
import './Header.css'

export default function Header({data}) {

    const Selector=useSelector(s=>s.Monuments.each)

  const history=useHistory()
  return (
    <div className='Description_Section'>
      <div className='Description_Header' >
    <img alt={Selector.name} src={Selector.img_url}></img>
         
         <div className='Description_content'>
           <h1>{Selector.name}</h1>
           <p>{Selector.description}</p>
           <div onClick={()=>history.push(`/user/BookingForm`)} className='Button_new'><div>Book Now</div></div>
         </div>
      </div>
    </div>
  )
}
