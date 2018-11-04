import React, { Component } from 'react';
import './App.css';

class App extends Component {
  onClick() {
    const url = [
    // Craigslist Gigs
    'https://saltlakecity.craigslist.org/d/gigs/search/ggg',
    //  LDS Church
    'https://careers.lds.org/search/public/search.aspx?lang=ENG',
    //  MX
    'https://data.mx.com/company#careers',
    //  RedOlive
    'https://www.redolive.com/jobs',
    //  Lucid
    'https://www.linkedin.com/company/lucidsoftware/jobs/'
    ]
    for(let i = 0; i < url.length; i++) {
      window.open(url[i], '_blank')
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.onClick}>Open All</button>
      </div>
    );
  }
}
export default App;
