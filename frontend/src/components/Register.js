import React, { Component } from 'react';
import CommunicationManager from '../services/CommunicationManager';
import Config from '../services/Config'
import axios from 'axios';



class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    }
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onEmailChanged = this.onEmailChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onConfirmPasswordChanged = this.onConfirmPasswordChanged.bind(this);
  }


  render() {
    return (
        <div className="col-12">
            <form className="col-4">
            <div class="form-group">
                    <label for="exampleInputName">Nom</label>
                    <input type="text" class="form-control" onChange={this.onNameChanged} id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" onChange={this.onEmailChanged} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" onChange={this.onPasswordChanged} id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputComfirmPassword1">Comfirm Password</label>
                    <input type="password" class="form-control" onChange={this.onConfirmPasswordChanged} id="exampleInputComfirmPassword1" placeholder="Comfirm Password"/>
                </div>
                <a type="submit" class="btn btn-primary" onClick={() => this.onRegisterButtonClicked()} >Submit</a>
            </form>
        </div>

    );
  }

    onRegisterButtonClicked()
    {
        alert(this.state.password_confirmation)
        if (this.state.email == null || this.state.email.length == 0) {
            if (this.state.password == null || this.state.password.length == 0) {
                alert("E-mail et mot de passe manquants");
            } else {
                alert("E-mail manquant");
            }
        }
        else if (this.state.password == null || this.state.password.length == 0) {
            alert("Mot de passe manquant");
        } else {

            let reportRegister = {
                email: this.state.email,
                name: this.state.name,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
                alert(JSON.stringify(reportRegister))
                CommunicationManager.register(Config.API_URL_DEV + CommunicationManager.ROUTE_REGISTER, reportRegister)
            }

        
            
        }
        
    onNameChanged(event) 
    {
        this.setState({name: event.target.value});
    }
    onEmailChanged(event) 
    {
        this.setState({email: event.target.value});
    }
    onPasswordChanged(event)
    {
        this.setState({password: event.target.value});
    }
    onConfirmPasswordChanged(event)
    {
        this.setState({password_confirmation: event.target.value});
    }
}


export default Register;
