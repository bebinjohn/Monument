import React ,{useState}from 'react';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import "../../user/Login/Login.css";
import Input from '../../user/Login/Input'
import {adminlogin} from '../../../actions/Login'
function Login(){
  const LoginState=useSelector(state=>state.Login)
  const dispatch=useDispatch()
//   console.log("hi",LoginState);

const [Info,setInfo]=useState({mobile:"",password:""})
const history=useHistory()

if(LoginState.AdminAuth){
  history.push("/admin/Dashboard")
}

const submitform=(event)=>{
  event.preventDefault();
  dispatch(adminlogin(Info))
}

const changeValue=(event)=>{
    setInfo({
      ...Info,
      [event.target.name]:event.target.value
    })
}
  return(
    <div className='background'>
      <div>
            <div className='Header_Login'>
                <h1>Hello Admin!</h1>
              <h1>Login to <span>My India</span></h1>
            </div>
          <div>
              <div>
                <form className='Form_container'>  
              <Input fun={changeValue} name="mobile"   placeholder="Enter Your Phone"  label= "Phone Number" type="tel" />
              <Input  fun={changeValue} name="password"    placeholder="Enter Your Password"  label= "Password" type="password" />
              <button  onClick={(e)=>submitform(e)} className='Button-container'>Submit</button>
              </form>
              </div>
          </div>
      </div>
      </div>
  )
}
export default Login;