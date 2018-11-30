import React, { Component } from 'react';

class Investments extends Component {
  render() {
    return (
      <div className="buttonDiv">
        <button 
          onClick={ (e) => {
            const primerosURL = [
              //  TransAmerica
              'https://www.ta-retirement.com/default.aspx?ReturnUrl=/sip/employee/AcctInfo/pa_PersonalProfile.aspx?UserType=P&ST=Profile&Addr=Y&Email=Y&Pwd=Y&PwdHelp=Y',
              //  MassMutual
              'https://retire.massmutual.com/participant/public/Login.aspx',
              //  Vanguard
              'https://investor.vanguard.com/home/'
            ]
            for(let i = 0; i < primerosURL.length; i++) {
                window.open(primerosURL[i], '_blank')
            }
          }}>Investments</button>
      </div>

    );
  }
}
export default Investments;
