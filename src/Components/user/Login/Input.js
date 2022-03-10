import React from 'react'
import './Input.css'
export default function Input({placeholder,type,name,label,fun}) {
  return (
        <div className='Input_container'>
            <label>{label}</label>
            <input onChange={(e)=>fun(e)} required placeholder={placeholder} type={type} name={name}></input>
        </div>
  )
}
