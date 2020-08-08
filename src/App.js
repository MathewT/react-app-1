import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component{
  state = {
    persons: [
      {name: "Amy", age: 28},
      {name: "Bill", age: 46},
      {name: "Joe", age: 56}
    ],
    otherState: "some other state data"
  };
  
  switchNameHandler = () => {
    this.setState( {
      persons: [
        {name: "Terri", age: 64},
        {name: "Anne", age: 67},
        {name: "Mike", age: 45}
      ]
    });
    console.log(this.state);
  }; 
  
  sayHello = () => {
    console.log(`...saying hello`);
  };

  render() {
    return (
      <div className="App">
        <h1>hello, world</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My hobby is computer programming.
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.sayHello}/>
      </div>
    );
  }
}

export default App;
