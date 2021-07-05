import {LOADING,GET_PRODUCTS} from './actionTypes';



export default function productReducer(state = {
                                        name:'productReducer'}, action) {

    // switch(action.type){
    //     case LOADING:
    //         return {...state, loading:true}
    //     case GET_PRODUCTS:
    //         return {...state, loading:false}
    //     default:
    //         return state;
    // }
    return state;
}