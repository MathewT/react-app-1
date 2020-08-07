import React from 'react';
import './App.css';
import Person from './Person/Person.js'

function App() {
  return (
    <div className="App">
      <h1>hello, world</h1>
      <Person name="Adam" age="15">My hobby is computer programming.</Person>
      <Person name="Chuck" age="54"/>
      <Person name="Stephen" age="56"/>
    </div>
  );
}

export default App;
