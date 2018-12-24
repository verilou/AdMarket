import React, { Component } from 'react';
import CommunicationManager from '../services/CommunicationManager';
import Config from '../services/Config'



class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
    }
    this.onEmailChanged = this.onEmailChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
  }


  render() {
    return (
        <div className="col-12">
            <form className="col-4">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" onChange={this.onEmailChanged} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" onChange={this.onPasswordChanged} id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <a type="submit" class="btn btn-primary" onClick={() => this.onLoginButtonClicked()} >Submit</a>
            </form>

        </div>

    );
  }

    onLoginButtonClicked()
    {
        if (this.state.email === null || this.state.email.length === 0) {
            if (this.state.password === null || this.state.password.length === 0) {
                alert("E-mail et mot de passe manquants");
            } else {
                alert("E-mail manquant");
            }
        }
        else if (this.state.password === null || this.state.password.length === 0) {
            alert("Mot de passe manquant");
        } 
        else {
            let reportLogin = {
                email: this.state.email,
                password: this.state.password
            }
                alert(JSON.stringify(reportLogin))
                CommunicationManager.login(Config.API_URL_DEV + CommunicationManager.ROUTE_LOGIN, reportLogin)
            }
        }
        
    onEmailChanged(event) 
    {
        this.setState({email: event.target.value});
    }
    onPasswordChanged(event)
    {
        this.setState({password: event.target.value});
    }
}


export default Login;
