import React,{useState} from 'react'
import './Information.css'
import { useSelector } from 'react-redux'
export default function Information() {


const [Info,setInfo]=useState("Address")

const Selector=useSelector(s=>s.Monuments.each)


    const Template=({head,value,head1,value1,head2,value2})=>(
        <div className='Nearest_Content'>
        <div>
        <div>{head}</div>
        <div>:</div>
        <div>{value}</div>
        </div>
        <div>
        <div>{head1}</div>
        <div>:</div>
        <div>{value1}</div>
        </div>
        <div>
        <div>{head2}</div>
        <div>:</div>
        <div>{value2}</div>
        </div>
    </div>
    )
    
  return (
    <div className='Info_section'>
        <h1 className='Info_section_heading'>Monument Information</h1>
        <ul className="Info_Nav">
            <div style={Info==="Address"?{color:"#fe043c"}:null} onClick={()=>setInfo("Address")}>Address</div>
            <div style={Info==="Ticket"?{color:"#fe043c"}:null} onClick={()=>setInfo("Ticket")}>TicketPricing</div>
            <div style={Info==="Hours"?{color:"#fe043c"}:null} onClick={()=>setInfo("Hours")}>Opening Hours</div>
            <div style={Info==="Contact"?{color:"#fe043c"}:null} onClick={()=>setInfo("Contact")}>Contact</div>
        </ul>

        <div>
            
            <div style={{display:"flex",justifyContent:"center"}}>
               <div className='Table_Container'>
                   <div className='Table_heading'>{Info==="Address"?"Address":Info==="Ticket"?"TicketPricing":Info==="Hours"?"Opening Hours":"Contact"}</div>

                   <div style={{padding:"10px"}}>
                   {Info==="Address"?<div><Template head={"Category"} value={Selector.category} head1={"District"} value1={Selector.district}
                    head2={"State"} value2={Selector.state}
                    /></div>
                   :Info==="Ticket"?<div><Template head={"Adult"} value={`₹ ${Selector.adult_price}`} head1={"Child"} value1={`₹ ${Selector.child_price}`}
                   
                   /></div>:
                   Info==="Hours"? <div><Template head={"opening Time"} value={Selector.opening_time} head1={"closing Time"} value1={Selector.closing_time}
                   head2={"Holidays"} value2={Selector.weekly_holiday}
                   /></div>
                   : <div><Template head={"Head"} value={"XXX"} head1={"Email"} value1={"bebinjohn28@gmail.com"}
                   head2={"Phone"} value2={"99999999"}
                   /></div>}
                   </div>
               
               </div>

            </div>
            
        </div>
    </div>
  )
}
