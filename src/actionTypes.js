export const DECREASE = "DECREASE";
export const INCREASE = 'INCREASE';
export const RESET = 'RESET';

export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";

export const LOADING = "LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";


//Action creators

export const decrease = ()=>{ 
    return {type:DECREASE}
}
export const increase = ()=>{ 
    return {type:INCREASE}
}
export const reset = ()=>{ 
    return {type:RESET}
}
export const modalOpan = (name, text)=>{ 
    return {type:MODAL_OPEN, payload:{name, text}}
}