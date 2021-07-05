import React from 'react';
import { connect } from 'react-redux';
import {DECREASE, INCREASE, RESET} from './actionTypes';

 function Counter({count,name,increase,decrease,reset}) {
  
    return (
        <div className="container">
            <h1>Counter</h1>
            <h2>{name}</h2>
            <p className ="counter">{count}</p>
            
            <div className="buttons">
                <button className="btn" type="button" onClick={decrease}  >Decrease</button>
                <button className="btn" type="button" onClick={reset} >Reset</button>
                <button className="btn" type="button" onClick={increase} >Increase</button>

            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {count: state.count, name: state.name}
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        increase:()=>dispatch({type:INCREASE}),
        decrease:()=>dispatch({type:DECREASE}),
        reset:()=>dispatch({type:RESET})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);