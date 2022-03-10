import React ,{useEffect,useState}from "react";
import { useSelector } from "react-redux";
import QRCode from "qrcode.react";
import "./Ticket.css";


function Ticket(){
    const Selector=useSelector(s=>s.Monuments.book);
    const Each=useSelector(s=>s.Monuments.each)
   
    return(
        <div className="Whole_container">
            
    <div>
        <h1>Ticket</h1>
       <div className="Ticket_container">
        <div className="Ticket_Section">
            <div>{Selector.place_name}</div>
            <div style={{display:'flex'}}> 
            <div>{Each.district}</div>
            <div>{Each.state}</div>
            </div>
            <div>Date of visit : <span>{Selector.date_of_visit}</span></div>
            <div>valid till : <span>{Selector.valid_till}</span></div>
            <div>Price :<span> ₹ {Selector.price}</span></div>
        </div>
            <div className="Code_Container">
                <div><QRCode value={`Place : ${Selector.place_name} \n price : ₹${Selector.price} \n Date of visit : ${Selector.date_of_visit} \n valid till: ${Selector.valid_till} `}/></div>
            </div>

           
        </div>
        <div className="Button_container"><div className="Button"><div>Generate pdf</div></div></div>
        
        </div>
        </div>
    )
}
export default Ticket;