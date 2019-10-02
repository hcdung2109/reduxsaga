import React from 'react';

function CounterComponent(props) {
    return (
        <div>
            <h3>Counter : {props.number}</h3>
            <button onClick={() => props.onIncrement(1)}>Tang</button>
            <button onClick={() => props.onDecrement(1)}>Giam</button>
        </div>
    );
}

export default CounterComponent;