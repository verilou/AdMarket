import React, { Component } from 'react';


class Annonceur extends Component {
  render() {
    return (
      <div>
        <div className="col-12">
          <div className="col-2 d-inline-block" style={style.blockInfluence}>
            <p>Recherche</p>
          </div>
          <div className="col-5 d-inline-block" style={style.blockInfluence}>
            <p style={{fontWeight:'bold'}}>Annonceur</p>
            <div style={style.blockDetailInfluence}>

            </div>
            <div style={style.blockDetailInfluence}>

            </div>
            <div style={style.blockDetailInfluence}>

            </div>
            <div style={style.blockDetailInfluence}>

            </div>
            <div style={style.blockDetailInfluence}>

            </div>
            <div style={style.blockDetailInfluence}>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
const style = {
  blockInfluence:{
    marginTop: '60px',
    border: '3px black solid',
    height: '72vh',
    borderRadius: '15px',
    backgroundColor: 'white', 
    marginLeft: '20px',
    overflow: 'auto'
  },
  blockDetailInfluence:{
    marginTop: '10px',
    border: '3px black solid',
    height: '12vh',
    borderRadius: '15px',
    backgroundColor: 'white'
  }
}

export default Annonceur;
