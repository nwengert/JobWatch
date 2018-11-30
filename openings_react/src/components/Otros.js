import React, { Component } from 'react';

class Otros extends Component {
    render() {
      return (
        <div className="buttonDiv">
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
export default Otros;