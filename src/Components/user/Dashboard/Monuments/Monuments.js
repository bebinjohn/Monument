import React,{useEffect} from 'react'
import taj from '../../../assets/taj.jpg'
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from 'react-router'
import {Get} from '../../../../actions/MonumentGet'
import './Monuments.css'
import './Card'
import Card from './Card'
export default function Monuments() {

  const Data=useSelector(state=>state.Monuments.all);
  // console.log("jjjj",Data)
  const dispatch=useDispatch()
  const history=useHistory()

  useEffect(()=>{
        dispatch(Get())
  },[])

  

  const Monuments=()=>Data.map(each=>(
    <div style={{cursor:"pointer"}} onClick={()=>history.push(`/user/Description/${each._id}`)}>
        <Card each={each}/>
    </div>
    
  ))
  return (
    <div className='Section_Monuments'>
      <h1>Explore Monuments & Museums</h1>
      <div className='Monuments_container'>
           <Monuments/>
      </div>
      
    </div>
   
  )
}
