let url="https://coding-warriors.herokuapp.com"

export const Get=()=>async(dispatch)=>{
    const response=await fetch(`${url}/dashboard/places`)
    const res=await response.json()
    if(response.status===200){
        // console.log(res
        dispatch({type:"GET",payload:res})
    }
        else {
            alert(res.msg)
        }
}

export const Geteach=(id)=>async(dispatch)=>{
    const response=await fetch(`${url}/dashboard/places/${id}`)
    const res=await response.json()
    if(response.status===200){
        // console.log("hello",res)
        dispatch({type:"EACH",payload:res})
    }
        else {
            alert(res.msg)
        }
}


export const Bookingform=(formData,history)=>async(dispatch)=>{
    const response=await fetch(`${url}/dashboard/tickets/book`,{method:"POST",body:formData})
    const res=await response.json()
    // alert("")
    history.push('/user/Ticket')
    console.log(res)
    if(response.status===200){
    dispatch({type:"BOOK",payload:res.info})
    }
    else {
        alert(res.msg)
    }
}


export const AddMonument=async(formData)=>{
    const response=await fetch(`${url}/admin/places/add`,{method:"POST",body:formData})
    const res=await response.json()
    if(response.status===200){
        console.log(res,"kkk")
        alert("Form Submitted!!")
    }
    else {
        alert(res.msg)
    }
}