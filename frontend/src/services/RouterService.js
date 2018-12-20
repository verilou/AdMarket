import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import Annonceur from '../components/Annonceur';
import Influenceur from '../components/Influenceur';
import Register from '../components/Register';
import Login from '../components/Login';
import Header from '../components/Header';
import AuthYoutube from '../components/AuthYoutube';
import CheckAuthYoutube from '../components/CheckAuthYoutube';
import urlImages from '../assets/images/fond2.jpg';
import fondInf from '../assets/images/fondInfluence.png';
import fondAnn from '../assets/images/fondAnnonce.png';


function RouterApp() {
  return (
    <Router>
      <div className="content-app d-flex justify-content-center">
        <div className="col-12 pr-0 pl-0">
          <Route exact path="/" component={HomePage} />
          <Route path="/influenceur" component={AuthYoutube} />
          <Route path="/annonceur" component={AnnonceurPage} />
          <Route path="/checkYtToken" component={CheckAuthYoutube} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className='container col-12 pr-0 pl-0' style={style.background}>
      <Header colorBackNav='transparent' activeHome='active'/>
      <Home/>
    </div>
  );
}

function InfluenceurPage() {
  return (
    <div className='container  col-12 pr-0 pl-0' style={style.backgroundInf}>
    <Header colorBackNav='black' activeInfluenceur='active'/>
      <Influenceur/>
    </div>
  );
}
function AnnonceurPage() {
    return (
    <div className='container  col-12 pr-0 pl-0' style={style.backgroundAnn}>
    <Header colorBackNav='black' activeAnnonceur='active'/>
      <Annonceur/>
    </div>
    );
  }
function RegisterPage() {
  return (
    <div className='container  col-12 pr-0 pl-0' style={style.backgroundInf}>
    <Header colorBackNav='black' activeInfluenceur='active'/>
      <Register/>
    </div>
  );
}
function LoginPage() {
    return (
    <div className='container  col-12 pr-0 pl-0' style={style.backgroundAnn}>
    <Header colorBackNav='black' activeAnnonceur='active'/>
      <Login/>
    </div>
    );
  }

const style = {
  background:{
    backgroundImage: `url(${ urlImages })`,
    backgroundSize:'cover',
    height: '100vh',
  },
  backgroundInf:{
    backgroundImage: `url(${ fondInf })`,
    height: '100vh',
  },
  backgroundAlt:{
    height: '100vh',
    backgroundColor: '#F2F6F9'
  },
  backgroundAnn:{
    backgroundImage: `url(${ fondAnn })`,
    height: '100vh',
  },
};
  
export default RouterApp;