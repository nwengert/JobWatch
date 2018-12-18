import React, { Component } from 'react';
class Practice extends Component {
  render() {
    return (
      <div className="buttonDiv">
        <button 
          onClick={ (e) => {
            const PracticeURL = [
              //  Facebook Marketplace
                'https://weblogin.asu.edu/cas/login?service=https%3A%2F%2Fweblogin.asu.edu%2Fcgi-bin%2Fcas-login%3Fcallapp%3Dhttps%253A%252F%252Fwebapp4.asu.edu%252Fmyasu%252F%253Finit%253Dfalse'
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
