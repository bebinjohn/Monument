import React,{useEffect,useState} from 'react'
import '../Header/Search.css'
import {states} from '../Header/States'
import './Navbar.css'

const StateFilter=()=>states.map((each,index)=><option key={index} value={each}>{each}</option>)
export default function Navbar() {

    const [scroll,setscroll]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>=500)setscroll(true)
            else setscroll(false)
        })
    },[])


  return (
    <div className='Navbar_background' style={scroll?{transform:"translateY(0px)"}:{transform:"translateY(-200px)"}}>
        <h1>My India</h1>
        <div className='Header_Input_Navbar'>
              <input placeholder='Search your monuments & Museums here'></input>
              <div><div>Go</div></div>
        </div>
        <select className='select_Navbar' style={{borderRadius:"5px"}}>
            <StateFilter/>
        </select>
        <div className='Navbar_logo'><img alt='logo' src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"/></div>
    </div>
  )
}
