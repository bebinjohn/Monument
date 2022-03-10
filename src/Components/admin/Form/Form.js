import React  from 'react'
import './Form.css'
import Navbar from '../Dashboard/Navbar';
import {AddMonument} from '../../../actions/MonumentGet'

export default function admin() {
  const handleSubmit = (e) =>{
    e.preventDefault()
    var name = document.getElementById('admin-name').value;
    var category = document.getElementById('admin-category').value;
    var open = document.getElementById('admin-opentime').value;
    var close = document.getElementById('admin-closetime').value;
    var week = document.getElementById('admin-week').value;
    var current=document.getElementById('admin-currentlyopening').value;
    var adults = document.getElementById('admin-adult').value;
    var children = document.getElementById('admin-child').value;
    var State=document.getElementById('admin-inputState').value;
    var district=document.getElementById('admin-country-district').value;
    var visitor=document.getElementById('admin-visitor').value;
    var file=document.getElementById('admin-file');
    var description = document.getElementById('admin-description').value;

     var form_data = new FormData();
    form_data.append("name",name); 
    form_data.append("category",category); 
    form_data.append("opening_time",open); 
    form_data.append("closing_time",close); 
    form_data.append("weekly_holiday",week); 
    form_data.append("currently_open",current); 
    form_data.append("adult_price",adults); 
    form_data.append("child_price",children); 
    form_data.append("state",State); 
    form_data.append("district",district); 
    form_data.append("max_visitors",visitor); 
    form_data.append("image",file.files[0]);
    form_data.append("description",description);
    // form_data.forEach((ele) => {console.log(ele)})
    // xhttp.send(form_data);

    
    AddMonument(form_data)
    }    
    
  

  return (
    <div>
        <Navbar/>
        <form className="admin-form" >  
        <h1>Enter Monument Details</h1>
        <ul className="wrapper">
            
    <li className="admin-form-row" id="name">
        <label >Name:</label>
        <input type="text" id='admin-name' ></input>
    </li>


    <li className="admin-form-row">
        <label >Category:</label>
        <select  name="admin-category" id="admin-category">
            <option value="1">Monument</option>
            <option value="2">Museum</option>
        </select>
    </li>
     
    <li className="admin-form-row" >
        <label >OpenTime:</label>
        <input type="time" id="admin-opentime" ></input>
    </li>
    <li className="admin-form-row" >
        <label>CloseTime:</label>
        <input type="time" id='admin-closetime'></input>
    </li>
    <li className="admin-form-row">
        <label >Weekly Holidays:</label>
        <select  id="admin-week">
            <option value="1">Sunday</option>
            <option value="2">Monday</option>
            <option value="2">Tuesday</option>
            <option value="2">Wednesday</option>
            <option value="2">Thursday</option>
            <option value="2">Friday</option>
            <option value="2">Saturday</option>
        </select>
    </li>
        <li className="admin-form-row">
        <label >Currently Open:</label>
        <select name="admin-currentlyopening" id="admin-currentlyopening">
            <option value="1">Yes</option>
            <option value="2">No</option>
        </select>
    </li>
        <li className="admin-form-row">
        <label >Adult Price:</label>
        <input type="text" id="admin-adult" ></input>
    </li>
        <li className="admin-form-row">
        <label >Child Price:</label>
        <input type="text"  id='admin-child'></input>
    </li>
        <li className="admin-form-row">
        <label >State:</label>
        <select  id="admin-inputState" >
            <option value="SelectState">Select State</option>
            <option value="Andra Pradesh">Andra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madya Pradesh">Madya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Orissa">Orissa</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttaranchal">Uttaranchal</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
            <option disabled >UNION Territories</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadeep">Lakshadeep</option>
            <option value="Pondicherry">Pondicherry</option>
          </select>
    </li>
        <li className="admin-form-row" >
        <label >District:</label>
        <select id="admin-country-district">
            <option value="Test">Test </option>
        </select>
    </li>
        <li className="admin-form-row">
        <label >Maximum Visitors:</label>
        <input type="text" id='admin-visitor' ></input>
    </li>
       
    
    <li className="admin-form-row">
            <label>Upload :</label>        
            <input type="file" id='admin-file' ></input>
    </li>
    
    <li className="admin-form-row" id="description">
        <label >Description:</label>
        <textarea id='admin-description'   ></textarea>
    </li>
    <li className="admin-form-row">
        <button className="admin-button"  onClick={handleSubmit}>Add Place</button>
    </li>
    </ul>
    </form>
    </div>
    
  )
}