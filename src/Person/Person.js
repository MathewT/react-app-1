import React from 'react';
import './Person.css'

const person = (props) => {
  return (
    <div className="Person">
      <p>I'm {props.name} component! I am {props.age} years old.</p>
      {/* <p>{props.children}</p> */}
      <input type="text" onChange={props.changeHandler} value={props.name} />
      <button onClick={props.click}>Say Hello from {props.name}</button>
    </div>
    );
}

export default person;