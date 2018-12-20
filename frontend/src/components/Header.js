import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../assets/images/titrevalid.png';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    let url = window.location.href.split('/');
    return (
        <nav className="navbar" style={{backgroundColor : this.props.colorBackNav}}>
        <div class="col-5">
                    <img src={logo} className="w-25" alt="logo" />
                </div>
        <div class="col-5">
                    <ul className="nav" role="tablist">
                        <li className="nav-item"> 
                        <Link className={`nav-link font-weight-bold ${this.props.activeHome}`} style={ url[3] == '' ? style.linkHome : style.linkAlt } id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link font-weight-bold ${this.props.activeInfluenceur} `} style={ url[3] == 'Influenceur' ? style.linkInfluenceur : style.linkAlt } id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" to="/Influenceur">INFLUENCEUR</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link font-weight-bold ${this.props.activeAnnonceur} `} style={ url[3] == 'Annonceur' ? style.linkAnnonceur : style.linkAlt } id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" to="/Annonceur">ANNONCEUR</Link>
                        </li>
                    </ul>
                    </div>
        </nav>
    );
  }
}
const style = {
    linkHome:{
        color: 'white',
        border: '3px white solid',
        borderRadius: '50px',
        backgroundColor:'#E5A060',
        boxShadow: '5px 6px 9px 0px rgba(0, 0, 0, 0.3)'
    },
    linkAnnonceur:{
        border: '3px white solid',
        borderRadius: '50px',
        backgroundColor:'rgb(53, 73, 154)',
        color:'white'
    },
    linkInfluenceur:{
        border: '3px white solid',
        borderRadius: '50px',
        backgroundColor:'rgb(202, 62, 89)',
        color:'white'
    },
    linkAlt:{
        border: '3px solid transparent',
        backgroundColor:'transparent',
        color:'white'
    },
    
}
export default Header;