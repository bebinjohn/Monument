import React from 'react'
import Header from './Header/Search'
import Monuments from './Monuments/Monuments'
import Navbar from './Navbar/Navbar'
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router'
export default function Dashboard() {
  const history=useHistory()
    const Selector=useSelector(state=>state.Login);
    
    if(!Selector.Auth)history.push('/user/Login');
  
  return (
    <div>
      <Navbar/>
      <Header/>
      <Monuments/>
    </div>
  )
}
