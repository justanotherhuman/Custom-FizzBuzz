import React from 'react';
import Results from './Results.jsx'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      upperLimit: 0,
      conditionals : {},
      divisor: null,
      replacementString: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.pendingDivisor = this.pendingDivisor.bind(this);
    this.pendingReplacementString = this.pendingReplacementString.bind(this);
    this.addPendingConditional = this.addPendingConditional.bind(this);
  }

  handleChange(event) {
    this.setState({upperLimit: event.target.value});
  }

  pendingDivisor(event){
     this.setState({pendingDivisor: event.target.value})
  }

  pendingReplacementString(event){
    this.setState({pendingReplacementString: event.target.value})
  }

  addPendingConditional(event){
    let oldState = this.state.conditionals;
    oldState[this.state.pendingDivisor] = this.state.pendingReplacementString;
    //console.log(oldState);
    this.setState({conditionals: oldState});
  }


  render() {
  return (
    <div className="App">
      {/* <form> */}
      <header className="App-header">
        <h6>⟳ refresh browser to reset</h6>
        <h1>Enter a upper limit
          {/* <label>upperLimit</label> */}
            <input onChange={this.handleChange} placeholder="max" aria-labelledby="upperLimit"></input>
           
        </h1>
        <h1>if divisible by
          {/* <label>divisor */}
            <input onChange={this.pendingDivisor} label="divisor" placeholder="divisor"></input>
          {/* </label> */}
          , print 
          {/* <label>replacement */}
            <input onChange={this.pendingReplacementString} placeholder="replacement"></input>
          {/* </label>  */}
        </h1>
        <button onClick={this.addPendingConditional}>apply</button>
      <Results props={this.state}/>
      </header>
      {/* </form> */}
    </div>
  );
}
}
export default App;
