import React from 'react';
import { connect } from 'react-redux';
import {DECREASE, INCREASE, RESET} from './actionTypes';

 function Counter(props) {
    const [count, setCount] = React.useState(0);
    return (
        <div className="container">
            <h1>Counter</h1>
            <h2>{props.name}</h2>
            <p className ="counter">{props.count}</p>
            
            <div className="buttons">
                <button className="btn" type="button" onClick={()=>props.dispatch({type:DECREASE})}  >Decrease</button>
                <button className="btn" type="button" onClick={()=>props.dispatch({type:RESET})} >Reset</button>
                <button className="btn" type="button" onClick={()=>props.dispatch({type:INCREASE})} >Increase</button>

            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {count: state.count, name: state.name}
}

export default connect(mapStateToProps)(Counter);