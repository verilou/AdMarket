import React, { Component } from 'react';


class AuthYoutube extends Component 
{
    /*
    * Create form to request access token from Google's OAuth 2.0 server.
    */
    constructor(props) {
        super(props);
        this.state = {
            CLIENT_ID: '204800523692-k1nse0ff2hnk162u5j6ikbe5df00f770.apps.googleusercontent.com',
            REDIRECT_URI: 'http://localhost:3000/checkYtToken',
        }
    }

    oauthSignIn() {
        // Google's OAuth 2.0 endpoint for requesting an access token
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    
        // Create <form> element to submit parameters to OAuth 2.0 endpoint.
        var form = document.createElement('form');
        form.setAttribute('method', 'GET'); // Send as a GET request.
        form.setAttribute('action', oauth2Endpoint);
    
        // Parameters to pass to OAuth 2.0 endpoint.
        var params = {'client_id': this.state.CLIENT_ID ,
                    'redirect_uri': this.state.REDIRECT_URI,
                    'response_type': 'token',
                    'scope': 'https://www.googleapis.com/auth/youtube.readonly',
                    'include_granted_scopes': 'true',
                    'state': 'socool'};
    
        // Add form parameters as hidden input values.
        for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
        }

        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form);
        form.submit();
        
    }    
    render(){
          return this.oauthSignIn()
    }
}
export default AuthYoutube;
