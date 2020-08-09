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
    otherState: "some other state data",
    switchedNameCount: 0
  };
  
  pausecomp = (millis) => 
  {
      var date = new Date();
      var curDate = null;
      do { curDate = new Date(); }
      while(curDate-date < millis);
  }
  switchNameHandler = () => {
    let cnt = this.state.switchedNameCount;
    cnt++;
    this.setState( {
      persons: [
        {name: "Terri", age: 64},
        {name: "Anne", age: 67},
        {name: "Mike", age: 45}
      ],
      switchedNameCount: cnt
    });
    // console.log(this.state);
  }; 
  
  sayHello = (name) => {
    console.log(`${name}, saying hello`);
    console.log(this.state);
  };
  
  nameChangedHandler = (event) => {
    console.log(event.target.value);
    this.setState( {
      persons: [
        {name: event.target.value, age: 64},
        {name: "Anne", age: 67},
        {name: "Mike", age: 45}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>hello, world {this.state.switchedNameCount}</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.sayHello.bind(this, this.state.persons[0].name)}
          changeHandler={this.nameChangedHandler}>My hobby is computer programming.
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.sayHello.bind(this, this.state.persons[1].name)}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.sayHello.bind(this, this.state.persons[2].name)}/>
      </div>
    );
  }
}

export default App;
