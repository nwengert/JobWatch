import React, { Component } from 'react';
import './index.css';
import Primeros from './components/Primeros';
import Otros from './components/Otros';
import Investments from './components/Investments';
import RV from './components/RV';
import Practice from './components/Practice';


class App extends Component {
  render(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
      fontSize: 30
    }

    if (hours < 12) {
      timeOfDay = "morning"
      styles.color = "#ffa500"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "#7ec0ee"
    } else {
      timeOfDay = "night"
      styles.color = "#800080"
    }

    return (
      <div className="App">
        <h1 style={styles}> Good {timeOfDay}!</h1>
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
