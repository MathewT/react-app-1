import React from 'react';

const person = (props) => {
  // function clicker() {
  //   console.log(`${props.name}, saying hello!`);
  // };
  return (
    <div>
      <p>I'm {props.name} component! I am {props.age} years old.</p>
      {/* <p>{props.children}</p> */}
      <input type="text" onChange={props.changeHandler} value={props.name} />
      <button onClick={props.click}>Say Hello</button>
    </div>
    );
}

export default person;