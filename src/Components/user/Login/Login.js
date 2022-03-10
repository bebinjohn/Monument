import React ,{useState}from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from 'react-router';
import "./Login.css";
import {Register,login} from '../../../actions/Login'
import Input from './Input'
function Login(){

  const history=useHistory()
  const LoginState=useSelector(state=>state.Login)

  if(LoginState.Auth)history.push('/')


  // console.log("hiii",LoginState.Auth)

  const dispatch=useDispatch()
  const [state,setstate]=useState(true)

  const [Info,setInfo]=useState({name:"",mobile:"",password:"","confirmpassword":""})

  const changeValue=(event)=>{
      setInfo({
        ...Info,
        [event.target.name]:event.target.value
      })
  }
  const submitform=(event)=>{
      event.preventDefault();
      if(state){
          dispatch(login(Info,history))
      }else dispatch(Register(Info,history))
  }

  return(
    <div className='background'>
      <div>
            <div className='Header_Login'>
              <h1>{state?"Login":"Register"} to <span>My India</span></h1>
              <div className='New_user'><div> {state?"New here!":"Already User!"}</div><div onClick={()=>setstate(!state)} className='Nav_Login'>&nbsp;{state?"Register Now":"Login"}</div></div>
            </div>
          <div>
              <div>
                <form className='Form_container'>
                  {!state ?<Input fun={changeValue}  name="name"  placeholder="Enter Your Name"  label= "Name" type="text" />:null}
              <Input fun={changeValue}  name="mobile" placeholder="Enter Your Phone"  label= "Phone Number" type="tel" />
              <Input fun={changeValue} name="password"  placeholder="Enter Your Password"  label= "Password" type="password" />
              {!state?
                 <Input fun={changeValue}  name="confirmpassword" placeholder="Enter Your "  label= "Confrim Password" type="password" />:null
            }
              <button onClick={(e)=>submitform(e)} className='Button-container'>Submit</button>
              </form>
              </div>
          </div>
      </div>
      </div>
  )
}
export default Login;