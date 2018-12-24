import React, { Component } from 'react';
import CommunicationManager from '../services/CommunicationManager';
import Config from '../services/Config';
import Annonce from './Annonce';



class Annonceur extends Component {

  constructor(props){
    super(props);
    this.state = {
      annonces: []
    }
  }
  
  componentDidMount(){
    CommunicationManager.getAnnonces(Config.API_URL_DEV)
    this.setState({annonces: this.props.annonce})
  }
  
  
  render() {
    return (
      <div>
        <div className="col-12">
          <div className="col-2 d-inline-block" style={style.blockInfluence}>
            <p>Recherche</p>
          </div>
          <div className="col-5 d-inline-block" style={style.blockInfluence}>
            <p style={{fontWeight:'bold'}}>Annonceur</p>
              {/* {  this.state.annonces.map(annonce =>
              <div style={style.blockDetailInfluence}>
                <a href="">Serie: {annonce.name}</a>
              </div>)}  */}
              <Annonce />
               
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
