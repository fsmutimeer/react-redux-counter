import {DECREASE, INCREASE, RESET} from './actionTypes';


const defaultState = {
  count : 0,
  name: 'Feroz'
}


export default function reducer (state=defaultState, action){
    // if (action.type === "DECREASE"){
    //   return {...state, count:state.count-1}
    // }
    // if (action.type === "INCREASE"){
    //   return {...state, count:state.count+1}
    // }
    // if (action.type === "RESET"){
    //   return {...state, count:0}
    // }
    // return state;
  
    switch(action.type){
      case DECREASE:
        return {...state, count:state.count-1}
      case INCREASE:
        return {...state, count:state.count+1}
      case RESET:
        return {...state, count:0}
      default:
        return state;
    }
  }