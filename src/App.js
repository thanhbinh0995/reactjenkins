import React, {Component} from 'react';
import './App.css';
import TogglePages from './TogglePages.js';
let data = require('./screenplay.json');

class App extends Component {
  render() {
    return (
      <TogglePages url={data}/>
    );
  }
}
export default App;
