import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import UserData from '../services/UserData'
import Annonceur from '../components/Annonceur';
import Annonce from '../components/Annonce';

export default class CommunicationManager
{
    static ROUTE_LOGIN = 'login'
    static ROUTE_REGISTER = 'register'
    static ROUTE_USER = 'user'


    static register(url, obj)
    {
        var authOptions = {
            method: 'POST',
            url: url,
            data: JSON.stringify(obj),
            headers: {
             'Content-Type': 'application/json'
            },
            json: true
        };
           axios(authOptions)
              .then((response) => {
                  console.log(response);
                   })
              .catch((error) => {
                   alert(error)
                 })
    }

    static login(url, obj)
    {
        var authOptions = {
            method: 'POST',
            url: url,
            data: JSON.stringify(obj),
            headers: {
             'Content-Type': 'application/json',
            },
            json: true
           };
           axios(authOptions)
              .then((response) => {
                  Cookies.set('access_token', response.data.token)
                  alert(Cookies.get('access_token'))
                  console.log(response)
                   })
              .catch((error) => {
                   alert(error)
                 })
    }

    static async getAnnonce(url){
        var authOptions = {
            method: 'GET',
            url: url,
            headers: {
             'Content-Type': 'application/json',
             'authorization': 'bearer' + Cookies.get('access_token')
            },
        };
        await axios(authOptions)
            .then(response => {
                UserData.user = JSON.stringify(response);
                alert(UserData.user)
                console.log(UserData.user)
                return <Annonce annonce={response.data}/>
            })
            .catch((error) => {
                alert(error)
            })
    }

    static async getAnnonces(url) {
        var axiosInstance = axios.create({
            baseURL: url,
            headers: {
            'Authorization': 'bearer' + Cookies.get('access_token')
            }
        })
        try {
            let response = await axiosInstance.get(this.ROUTE_USER)
            UserData.user = JSON.stringify(response)
            return UserData.user    
            //alert(JSON.stringify(response))
            
        } catch (err) {
            console.error(err)
        }
    }


}
