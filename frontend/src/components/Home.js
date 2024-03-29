import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      
      <div class='row align-self-center col-12 d-inline-block mt-300'>
        <div class='col-5 d-inline-block pr-0 pl-0'>
          <button class=' active font-weight-bold text-white pr-5 pl-5 pt-2 pb-2' style={style.buttonInfluenceur}>Je recherche des Influenceurs</button>
        </div>
        <div class='col-5 d-inline-block pr-0 pl-0'>
          <button class=' active font-weight-bold text-white pr-5 pl-5 pt-2 pb-2' style={style.buttonAnnonceur}>Je recherche des Annonceurs</button>
        </div>
    </div>
    );
  }
}
const style = {
  buttonInfluenceur:{
    backgroundColor: '#CA3E59',
    border: '3px white solid',
    borderRadius: '50px',
    boxShadow: '5px 6px 9px 0px rgba(0, 0, 0, 0.3)'
  },
  buttonAnnonceur:{
    backgroundColor: '#35499A',
    border: '3px white solid',
    borderRadius: '50px',
    boxShadow: '5px 6px 9px 0px rgba(0, 0, 0, 0.3)'
  },
}
export default Home;
