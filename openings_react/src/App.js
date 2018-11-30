import React, { Component } from 'react';
import './index.css';
import Primeros from './components/Primeros';
import Otros from './components/Otros';
import Investments from './components/Investments';
import RV from './components/RV';
import Practice from './components/Practice';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Primeros />
        <Otros />
        <Investments />
        <RV />
        <Practice />
      </div>
    );
  }
}
export default App;
