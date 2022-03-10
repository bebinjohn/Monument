import React from 'react'
import './Search.css'

export default function Search() {
  return (
    <div className='Search_component'>
        <div className='Header_bar'>
          <h1>My India</h1>
          <div><img alt='logo' src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"/></div>
        </div>

     <div className='header_Subheader'>
        <div style={{margin:"10%"}}>
              <div className='Header_Title'>
              <p>Discover Monuments & Museums</p>
              </div>
              <div className='Header_Input'>
              <input placeholder='Search your monuments & Museums here'></input>
              <div><div>Go</div></div>
              </div>
        </div>
        </div>
       
    </div>
  )
}
