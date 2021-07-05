import React from 'react';
import { connect } from 'react-redux';
import {increase, decrease, reset, modalOpan} from './actionTypes';

 function Counter({count,name,increase,decrease,reset, modalOpan}) {
  
    return (
        <div className="container">
            <h1>Counter</h1>
            <h2>{name}</h2>
            <p className ="counter">{count}</p>
            
            <div className="buttons">
                <button className="btn" type="button" onClick={decrease}  >Decrease</button>
                <button className="btn" type="button" onClick={()=>{ 
                    reset()
                    modalOpan('Feroz','Model. this is MOdel. Hello Model  loruos lsalaslfu ourus lour slflsafoyrou  ljsfo oulur slfuo')
                }} >Reset</button>
                <button className="btn" type="button" onClick={increase} >Increase</button>

            </div>
        </div>
    )
}

function mapStateToProps({countState:{count, name}}){
    return {count: count, name: name}
}

// const mapDispatchToProps = {
//     increase, 
//     reset,
//     decrease,
//     modalOpan
// }

// function mapDispatchToProps(dispatch, ownProps){
//     return {
//         increase:()=>dispatch(increase()),
//         decrease:()=>dispatch(decrease()),
//         reset:()=>{

//             dispatch(reset())
//             dispatch(modalOpan('Feroz','Hello Model kladf ja3iua jlorums sladjfie lksadj lasdfj 8el jaskldfj a8e adfl;a ;a asdlfa dfljaldff jlsadfjlaks fasldfj j'))

//                 },
        
//     }
// }


export default connect(mapStateToProps, {
    increase, 
    reset,
    decrease,
    modalOpan

})(Counter);