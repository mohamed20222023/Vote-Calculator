import React, {Component} from 'react';
import Vote from './components/vote';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Vote/>
      </div>
    );
  }
}

export default App;
