import {MODAL_CLOSE, MODAL_OPEN} from './actionTypes';

const defaultState ={

    isOpen: false,
    name:"",
    test:""

}

export default function modalReducer(state=defaultState, action) {

    // switch(action.type){
    //     case MODAL_OPEN:
    //         return {...state,isOpen:true }
    //     case MODAL_CLOSE:
    //         return { ...state, }
    //     default:
    //         return state;
    // }

    if (action.type === MODAL_OPEN){
        return {...state, isOpen:true,name:action.payload.name, text:action.payload.text}
    }
    if (action.type === MODAL_CLOSE){
        return {...state, isOpen:false,name:"", text:""}
    }
    return state;
}


