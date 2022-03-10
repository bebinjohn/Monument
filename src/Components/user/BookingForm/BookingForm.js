import React, { useState } from "react";
import {useHistory} from 'react-router'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './BookingForm.css';
import {Bookingform} from '../../../actions/MonumentGet'

const BookingForm = () => {  

  const history=useHistory()
  const Selector=useSelector(s=>s.Monuments.each)
  const number=useSelector(state=>state.Login);
  const dispatch=useDispatch()
 

const [data,setdata]=useState({name:"",adults:0,children:0,price:0,date:""})
  const[details, showDetails] = useState(false);

  const gotoDetails=()=>{
    var name = document.getElementById('name').value;
    var adults = document.getElementById('adults').value;
    var children = document.getElementById('children').value;
    let price=parseInt((adults)*(Selector.adult_price))+parseInt((children)*(Selector.child_price))
    let date=myFunction()
    setdata({
      name,adults,children,price,date
    })
    showDetails(!details);
  }

  document.onload = function(){
    var form = document.getElementById('form');
    form.onsubmit = function(){
      return false;
    }
  }
  function myFunction() {
    var x = document.getElementById("date").value.split('-');
    var date1 = x[2]+'/'+x[1]+'/'+x[0];
    return date1;
  }
  
  const handleSubmit = (e) =>{
  var name = document.getElementById('name').value;
  var adults = document.getElementById('adults').value;
  var children = document.getElementById('children').value;
  let price=parseInt((adults)*(Selector.adult_price))+parseInt((children)*(Selector.child_price))
  let date=myFunction()
    let form_data = new FormData();
    form_data.append("name",name);
    form_data.append("price",price); 
    form_data.append("adult_cnt",adults); 
    form_data.append("child_cnt",children); 
    form_data.append("date_visit",date);  
    form_data.append("mobile", number.phone);
    form_data.append("place_id",Selector._id);
    
    dispatch(Bookingform(form_data,history))
    
  }
  return (
    <div className="fullBook">
      <h1>Booking Tickets</h1>
      <div className="details" style={details===false?{display:"block"}:{display:"none"}}>
        <h2>Enter your Details</h2>
        <form className="form" id="form"> 
          <div>
            <label>Name: </label>
            <input type="text" name='name' id='name' required/>
          </div>
          <div>
            <label>Number of adults: </label>
            <input type="number" name='adults' id='adults' required/>
          </div>
          <div>
            <label>Number of children: </label>
            <input type="number" name='children' id='children' required/>
          </div>
          <div>
            <label>Date of booking: </label>
            <input type="date" name='date'  id='date' required/>
          </div>
          <div>
            <button type="button" className="nextbtn" onClick={()=>gotoDetails()}>Next</button>
          </div>
        </form>
      </div>

      <div className="displayDetails" style={details===true?{display:"block"}:{display:"none"}}>
        <h2>Summary</h2>
        <div>
          <div>
            <h4>Name:&emsp; </h4>
            <h4>{data.name}</h4>
          </div>
          <div>
            <h4>{Selector.category} &emsp; </h4>
            <h4>{Selector.name}</h4>
          </div>          
          <div>
            <h4>Total Tickets:&emsp; </h4>
            <h4>{parseInt(data.adults)+parseInt(data.children)}</h4>
          </div>
          <div>
            <h4>Number of Adults:&emsp; </h4>
            <h4>{parseInt(data.adults)}</h4>
          </div>
          <div>
            <h4>Number of Children:&emsp; </h4>
            <h4>{parseInt(data.children)}</h4>
          </div>
          <div>
            <h4>Date of booking:&emsp; </h4>
            <h4>{data.date}</h4>
          </div>
          <div>
            <h4>Total Price:&emsp; </h4>
            <h4>₹ {data.price}</h4>
          </div>
          <div>
            <button type="button" onClick={()=>showDetails(!details)} className="editbtn">Edit Details</button>
            <button type="button" className="bookticketbtn" onClick={(e)=>handleSubmit()}>Book Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;