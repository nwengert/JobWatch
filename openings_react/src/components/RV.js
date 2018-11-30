import React, { Component } from 'react';
class RV extends Component {
  render() {
    return (
      <div className="buttonDiv">
        <button 
          onClick={ (e) => {
            const RV_URL = [
              //  Facebook Marketplace
                'https://www.facebook.com/marketplace/selling'
            ]
            for(let i = 0; i < RV_URL.length; i++) {
                window.open(RV_URL[i], '_blank')
            }
          }}>RV</button>
      </div>

    );
  }
}
export default RV;
