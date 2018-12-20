import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'



class CheckAuthYoutube extends Component 
{

    constructor(props) {
        super(props);
        this.state = {
            CLIENT_ID: '204800523692-k1nse0ff2hnk162u5j6ikbe5df00f770.apps.googleusercontent.com',
            queryString: window.location.hash.substring(1),
            redirect: false,
            JSX: <div>test</div>
        }
        this.exchangeOAuth2Token = this.exchangeOAuth2Token.bind(this);
        this.trySampleRequest = this.trySampleRequest.bind(this);
    }
    
    displaySampleRequest(params)
    {
        console.log(params)
        return (<div>OK</div>);
    }
    // If there's an access token, try an API request.
    // Otherwise, start OAuth 2.0 flow.
    trySampleRequest() {
        var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
        console.log(params);
        if (params && params['access_token']) {
            fetch("https://www.googleapis.com/youtube/v3/channels?mine=true&" + 'access_token=' + params['access_token'], {method : "GET"}).
            then((e) => {
                return e.json();
            }).then((e) => {
                this.displaySampleRequest(e)
            })
        } else {
            return <Redirect to="/annonceur"/>
        }
    }
    handleExchangeToken(xhr, params) {
        console.log(params);
        console.log(xhr);
        var response = xhr;
        // When request is finished, verify that the 'aud' property in the
        // response matches YOUR_CLIENT_ID.
        if (response['aud'] && response['aud'] == this.state.CLIENT_ID) {
            params['scope'] = response['scope'];
            localStorage.setItem('oauth2-test-params', JSON.stringify(params) );
            console.log(params.state == "socool");
            if (params['state'] == 'socool') {
                this.trySampleRequest();
            }
        } else if (xhr.readyState === 4) {
            console.log('There was an error processing the token, another ' +
            'response was returned, or the token was invalid.')
            return (<div>OK</div>);
        }  
    }
    /* Verify the access token received on the query string. */
    exchangeOAuth2Token() {
        var params = {};
        var regex = /([^&=]+)=([^&]*)/g, m;
        while (m = regex.exec(this.state.queryString)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
            // Try to exchange the param values for an access token.
            var oauth2Endpoint = 'https://www.googleapis.com/oauth2/v3/tokeninfo';
            if (params['access_token']) {
                fetch(oauth2Endpoint + '?access_token=' + params['access_token'], {method: "POST", mode: 'cors'}).then((e) => {
                    if (e.status === 200) {
                        return e.json();
                    } else {
                        throw e.status;
                    }
                }).then((e) => {
                    this.setState({
                        JSX: this.handleExchangeToken(e, params)
                    });
                }).catch((e) => {
                    console.log(e, "wow");
                    this.props.history.push('/influenceur') 
                });
            }
        }
        return (<div>OK2</div>)
    }
    render()
    {
        return (
            <div>
                OK
                {/* {this.exchangeOAuth2Token()} */}
            </div>);
    }
}
export default CheckAuthYoutube;
    