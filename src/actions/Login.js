
let url="https://coding-warriors.herokuapp.com"

export const Register=(data)=>async(dispatch)=>{
        // console.log("sss",data)
        let formData=new FormData();
        formData.append("name",data.name)
        formData.append("mobile",data.mobile)
        formData.append("password",data.password)
        formData.append("confirm-password",data.confirmpassword);
        const response=await fetch(`${url}/register`,{method:"POST",body:formData})
        const res=await response.json()
        if(response.status===200){
        console.log(res)
        dispatch({type:"REGISTER",payload:data.mobile})}
        else {
            alert(res.msg)
        }
    }
    



export const login=(data)=>async(dispatch)=>{
    let formData=new FormData();
        formData.append("mobile",data.mobile)
        formData.append("password",data.password)
        const response=await fetch(`${url}/login`,{method:"POST",body:formData})
        const res=await response.json()
        if(response.status===200){
            console.log(res)
            dispatch({type:"LOGIN",payload:data.mobile})
        }
            else {
                alert(res.msg)
            }
    } 
    export const adminlogin=(data)=>async(dispatch)=>{
        let formData=new FormData();
            formData.append("mobile",data.mobile)
            formData.append("password",data.password)
            const response=await fetch(`${url}/login`,{method:"POST",body:formData})
            const res=await response.json()
            if(response.status===200){
                // console.log(res)
                dispatch({type:"ADMIN_LOGIN",payload:data.mobile})
            }
                else {
                    alert(res.msg)
                }
        } 