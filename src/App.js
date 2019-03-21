import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import './App.css';

class App extends Component {

  addNewBox() {
    console.log('I AM WORKING!')
  }

  render() {
    return (
      <div className="App">
        <NewBoxForm triggerAddNewBox={this.addNewBox} />
      </div>
    );
  }
}

export default App;




// //invoke Box

//import Box from './Box';

// remove() {
//   console.log('I AM WORKING')
// }

// return (
//   <div className="App">
//     <Box width='100px' 
//           height='100px' 
//           backgroundColor='black'
//           triggerRemove={this.remove} />
//   </div>
// );