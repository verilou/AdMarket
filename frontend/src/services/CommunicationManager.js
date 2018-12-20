import Config from "./Config";
import axios from 'axios';


export default class CommunicationManager
{
    static ROUTE_LOGIN = 'login'
    static ROUTE_REGISTER = 'register'
    static ROUTE_USER = 'user'


    static register(url, obj)
    {

        // let request = new XMLHttpRequest()
        // request.open(method, url)
        // request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        // request.setRequestHeader('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
        // request.onreadystatechange = () => {
        //     if(request.readyState === 4)
        //     {
        //         if(request.status >= 200 && request.status < 300){
        //             console.log('1 ' + request.readyState)
        //             console.log('succes ' + success)
        //             console.log('reponse text' + request.responseText)
        //         }else{
        //             console.log('error ' + error)
        //             console.log('status requete' + request.status)
        //             console.log('status text' + request.statusText)
        //         }
        //     }
        // }
        // request.send(JSON.stringify(params))


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

//     static _user_login = ''
//     static _user_password = ''

//     static register(reportRegister, callback, error_cb)
//     {
//         this.fetchResponse(Config.API_URL_DEV + this.ROUTE_REGISTER, reportRegister, callback, error_cb)
//     }

//     static getConfigUrl()
//     {
//         return (Config.USE_DEV_SERVER ? Config.API_URL_DEV : Config.API_URL_PROD)
//     }

//     static login(email, pwd, callback, error_cb)
//     {
//         this._user_login = email
//         this._user_password = pwd

//         this.fetchResponse(this.getConfigUrl() + this.ROUTE_LOGIN, '', callback, error_cb)
//     }

//     static getWorksites(callback, error_cb)
//     {
//         this.fetchResponse(this.getConfigUrl() + this.ROUTE_WORKSITES_LIST, null, callback, error_cb, 'GET')
//     }

//     static acceptEula(callback, error_cb)
//     {
//         this.fetchResponse(this.getConfigUrl() + this.ROUTE_EULA, null, callback, error_cb)
//     }

//     static setStatus(reportStatus, callback, error_cb)
//     {
//         this.fetchResponse(this.getConfigUrl() + this.ROUTE_TRACTOR_STATUS, reportStatus, callback, error_cb)
//     }

//     static completeWorksite(report, callback, error_cb)
//     {
//         this.fetchResponse(this.getConfigUrl() + this.ROUTE_WORKSITES + "/" + report.id, {report:report}, callback, error_cb)
//     }

//     static fetchResponse(url, content, callback, error_cb, method = 'POST')
//     {
//         this._id++

//         let request = new XMLHttpRequest()
//         request.open(method, url)
//         request.setRequestHeader('X-AUTH-USERNAME', this._user_login)
//         request.setRequestHeader('X-AUTH-PASSWORD', this._user_password)
//         request.setRequestHeader('debug', Config.USE_DEV_SERVER)
//         request.setRequestHeader('Content-Type', 'multipart/form-data')
//         request.onreadystatechange = () => {
//             let res
//             if (request.readyState == 4) {
//                 if (!request.responseType || request.responseType === "text") {
//                     res = request.responseText
//                 } else if (request.responseType === "document") {
//                     res = request.responseXML
//                 } else {
//                     res = request.response
//                 }

//                 console.log("response: " + res)
//                 if (request.status == 200 && callback != null) {
//                     return callback(JSON.parse(res))
//                 } else if (request.status != 200 && error_cb != null) {
//                     let obj = JSON.parse(res)
//                     obj.status = request.status
//                     return error_cb(obj)
//                 }
//             }
//         }

//         if (method != 'GET') {
//             let data = new FormData()
//             if (content != null && content != '') {
//                 for (let val in content) {
//                     console.log("sending " + val + "=" + JSON.stringify(content[val]))
//                     data.append(val, JSON.stringify(content[val]))
//                 }
//                 console.log("using " + method + " to " + url)
//                 request.send(data)
//             } else {
//                 console.log("sending GET to " + url)
//                 request.send()
//             }
//         } else {
//             request.send()
//         }
//     }
}
