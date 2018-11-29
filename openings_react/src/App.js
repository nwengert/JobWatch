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
    'https://www.linkedin.com/company/lucidsoftware/jobs/',
    //  BambooHR
    'https://company.bamboohr.com/jobs/',
    //  USANA
    'https://www.linkedin.com/company/usana-health-sciences/jobs/'
    ]
    for(let i = 0; i < url.length; i++) {
      window.open(url[i], '_blank')
    }
  }
  render() {
    return (
      <div className="App">
        <button 
          onClick={ (e) => {
            const primerosURL = [
              // Craigslist Gigs
              'https://saltlakecity.craigslist.org/d/gigs/search/ggg',
              //  LDS Church
              'https://careers.lds.org/search/public/search.aspx?lang=ENG',
              //  MX
              'https://data.mx.com/company#careers',
              //  RedOlive
              'https://www.redolive.com/jobs',
              //  Lucid
              'https://www.linkedin.com/company/lucidsoftware/jobs/',
              //  BambooHR
              'https://company.bamboohr.com/jobs/',
              //  USANA
              'https://www.linkedin.com/company/usana-health-sciences/jobs/'
              ]
              for(let i = 0; i < primerosURL.length; i++) {
                window.open(primerosURL[i], '_blank')
              }
          }}>Primeros</button>

        <button 
        onClick={ (e) => {
            const otrosURL = [
              // Teem
              'https://www.teem.com/careers/',
              // Ancestry
              'https://www.ancestry.com/corporate/careers/search-jobs?job-listings-keyword=software&sort=asc&order=LOCATION',
              // Mavenlink
              'https://www.linkedin.com/jobs/search/?distance=25&f_C=362958&f_E=1%2C2&f_L=us%3A716&locationId=OTHERS.worldwide'
            ]
            for(let i = 0; i < otrosURL.length; i++) {
                window.open(otrosURL[i], '_blank')
              }
          }}>Otros</button>
      </div>

    );
  }
}
export default App;
