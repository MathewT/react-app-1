import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} component! I am {props.age} years old.</p>
      {/* <p>{props.children}</p> */}
      <button onClick={props.click}>Say Hello</button>
    </div>
    );
}

export default person;