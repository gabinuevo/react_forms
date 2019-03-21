import React, { Component } from 'react';
import Box from './Box';
import './App.css';

class App extends Component {

  remove() {
    console.log('I AM WORKING')
  }

  render() {
    return (
      <div className="App">
        <Box width='100px' 
              height='100px' 
              backgroundColor='black'
              triggerRemove={this.remove} />
      </div>
    );
  }
}

export default App;
