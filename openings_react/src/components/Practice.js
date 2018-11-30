import React, { Component } from 'react';
class Practice extends Component {
  render() {
    return (
      <div className="buttonDiv">
        <button 
          onClick={ (e) => {
            const PracticeURL = [
              //  Facebook Marketplace
                'https://www.asu.edu/'
            ]
            for(let i = 0; i < PracticeURL.length; i++) {
                window.open(PracticeURL[i], '_blank')
            }
            //now trying to make something happen once the page has loaded
            window.addEventListener("load", function () {
                alert("page loaded!")
            })
          }}>Practice</button>
      </div>

    );
  }
}
export default Practice;
