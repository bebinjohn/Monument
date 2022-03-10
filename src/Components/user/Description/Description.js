import React,{useEffect} from 'react'
import Header from './DescriptionHeader/Header'
import Information from './MonumentInfo/Information'
import Other from './OtherMonuments/Other'
import {Geteach} from '../../../actions/MonumentGet'
import {useParams} from 'react-router'
import { useDispatch } from 'react-redux'


export default function Description() {

  const {id}=useParams();
  const dispatch=useDispatch()
  // const [state,setdata]=useState({})

  useEffect(()=>{
       window.scrollTo(0,0);
       dispatch(Geteach(id))
  },[])
  return (
    <div style={{background:"#fff5ec"}}>
        <Header/>
        <Information/>
        {/* <Other/> */}
    </div>
    
  )
}
