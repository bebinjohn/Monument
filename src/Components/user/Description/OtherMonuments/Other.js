import React from 'react'
import taj from '../../../assets/taj.jpg'
import '../../Dashboard/Monuments/Card'
import '../../Dashboard/Monuments/Monuments.css'
import Card from '../../Dashboard/Monuments/Card'
const data=[
    {
      id:1,
      Name:"Tajmahal",
      place:"Delhi",
      price:20,
      img:taj
    },
    
    {
      id:3,
      Name:"Tajmahal",
      place:"Delhi",
      price:20,
      img:taj
    },
    {
      id:4,
      Name:"Tajmahal",
      place:"Delhi",
      price:20,
      img:taj
    },
  ]
export default function Other() {
  return (
      <div>
            <h1 className='Section_Monuments_heading'>Nearby Monuments</h1>
            <div style={{marginTop:"2%"}} className='Monuments_container'>
        {
            data.map(e=>(
                    <Card each={e}/>
            ))
        }
    </div>
      </div>
    
  )
}
