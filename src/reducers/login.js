export const Login=(state={Auth:false,AdminAuth:false,phone:""},action)=>{
    switch(action.type){
        case 'LOGIN':{
            return {Auth:true,AdminAuth:false,phone:action.payload};
        }
        case 'REGISTER':{
            return {Auth:true,AdminAuth:false,phone:action.payload};
        }
        case "ADMIN_LOGIN":{
            return {Auth:true,AdminAuth:true,phone:action.payload};
        }
        default:{
            return state;
        }
    }
}