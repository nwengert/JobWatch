import React, { Component } from 'react';

class Primeros extends Component {
    render() {
      return (
        <div className="buttonDiv">
          <button 
            onClick={ (e) => {
              const primerosURL = [
                // Canyons School District Substituting
                'https://sub.aesoponline.com/Substitute/Home',
                // Craigslist Gigs
                'https://saltlakecity.craigslist.org/d/gigs/search/ggg',
                //  LDS Church
                'https://careers.lds.org/search/public/search.aspx?lang=ENG',
                //  MX
                'https://data.mx.com/company#careers',
                //  RedOlive
                'https://www.redolive.com/utah-digital-agency-jobs/',
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
         </div>

      );
    } 
}
export default Primeros;