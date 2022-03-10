export const Monuments=(state={all:[],each:{},book:{}},action)=>{
    switch(action.type){
        case 'GET':{
            return {
                ...state,
                all:action.payload
            }
        }
        case 'EACH':{
            return{
                ...state,
                each:action.payload
            }
        }
        case 'BOOK':{
            return{
                ...state,
                book:action.payload
            }
        }
        default:{
            return state;
        }
    }
}