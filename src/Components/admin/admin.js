import React from 'react'

export default function admin() {
 
   return (
    
    <form>  
        <label className='admin-name'>Name:</label>
        <input type={"text"} className="admin-name"></input>
        <label className='admin-description'>Description:</label>
        <textarea name='admin-description'></textarea>
    </form>
  )
   }
