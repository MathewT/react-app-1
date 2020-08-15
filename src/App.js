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
    switchedNameCount: 0,
    showPersonsToggle: false
  };
  
  pauseComp = (millis) => 
  {
      var date = new Date();
      var curDate = null;
      do { curDate = new Date(); }
      while(curDate-date < millis);
  }
  switchNameButtonHandler = () => {
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
  }; 
  
  sayHelloButtonHandler = (name) => {
    console.log(`${name}, saying hello`);
  };
  
  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: event.target.value, age: 64},
        {name: "Anne", age: 67},
        {name: "Mike", age: 45}
      ]
    });
  };
  
  showPersons = () => {
    const doesShow = this.state.showPersonsToggle;
    console.log(`showPersons called.`);
    this.setState(
      {
        showPersonsToggle: !doesShow
      }
    )
  }; 
  
  render() {
    let persons = null;
    if (this.state.showPersonsToggle) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.sayHelloButtonHandler.bind(this, this.state.persons[0].name)}
            changeHandler={this.nameChangedHandler}>My hobby is computer programming.
          </Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.sayHelloButtonHandler.bind(this, this.state.persons[1].name)}/>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click={this.sayHelloButtonHandler.bind(this, this.state.persons[2].name)}/>
          </div>
      );
    }
    return (
      <div className="App">
        <h1>hello, world {this.state.switchedNameCount}</h1>
        {/* <button onClick={this.switchNameButtonHandler}>Switch Name</button> */}
        <button onClick={this.showPersons}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
