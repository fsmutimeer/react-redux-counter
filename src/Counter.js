import React from 'react';
import { connect } from 'react-redux';
 function Counter(props) {
    const [count, setCount] = React.useState(0);
    return (
        <div className="container">
            <h1>Counter</h1>
            <p className ="counter">{count}</p>
            <div className="buttons">
                <button className="btn" type="button" onClick={()=>setCount(count-1)}  >Decrease</button>
                <button className="btn" type="button" onClick={()=>setCount(0)} >Reset</button>
                <button className="btn" type="button" onClick={()=>setCount(count+1)} >Increase</button>

            </div>
        </div>
    )
}

export default connect()(Counter);