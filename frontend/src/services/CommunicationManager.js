import Config from "./Config";

export default class CommunicationManager
{
    static ROUTE_LOGIN = 'login'
    static ROUTE_WORKSITES_LIST = 'worksite/list'
    static ROUTE_WORKSITES = 'worksite'
    static ROUTE_EULA = 'eula'
    static ROUTE_TRACTOR_STATUS = 'tractor-status'

    static _id = 0
    static _user_login = ''
    static _user_password = ''

    static getConfigUrl()
    {
        return (Config.USE_DEV_SERVER ? Config.API_URL_DEV : Config.API_URL_PROD)
    }

    static login(email, pwd, callback, error_cb)
    {
        this._user_login = email
        this._user_password = pwd

        this.fetchResponse(this.getConfigUrl() + this.ROUTE_LOGIN, '', callback, error_cb)
    }

    static getWorksites(callback, error_cb)
    {
        this.fetchResponse(this.getConfigUrl() + this.ROUTE_WORKSITES_LIST, null, callback, error_cb, 'GET')
    }

    static acceptEula(callback, error_cb)
    {
        this.fetchResponse(this.getConfigUrl() + this.ROUTE_EULA, null, callback, error_cb)
    }

    static setStatus(reportStatus, callback, error_cb)
    {
        this.fetchResponse(this.getConfigUrl() + this.ROUTE_TRACTOR_STATUS, reportStatus, callback, error_cb)
    }

    static completeWorksite(report, callback, error_cb)
    {
        this.fetchResponse(this.getConfigUrl() + this.ROUTE_WORKSITES + "/" + report.id, {report:report}, callback, error_cb)
    }

    static fetchResponse(url, content, callback, error_cb, method = 'POST')
    {
        this._id++

        let request = new XMLHttpRequest()
        request.open(method, url)
        request.setRequestHeader('X-AUTH-USERNAME', this._user_login)
        request.setRequestHeader('X-AUTH-PASSWORD', this._user_password)
        request.setRequestHeader('debug', Config.USE_DEV_SERVER)
        request.setRequestHeader('Content-Type', 'multipart/form-data')
        request.onreadystatechange = () => {
            let res
            if (request.readyState == 4) {
                if (!request.responseType || request.responseType === "text") {
                    res = request.responseText
                } else if (request.responseType === "document") {
                    res = request.responseXML
                } else {
                    res = request.response
                }

                console.log("response: " + res)
                if (request.status == 200 && callback != null) {
                    return callback(JSON.parse(res))
                } else if (request.status != 200 && error_cb != null) {
                    let obj = JSON.parse(res)
                    obj.status = request.status
                    return error_cb(obj)
                }
            }
        }

        if (method != 'GET') {
            let data = new FormData()
            if (content != null && content != '') {
                for (let val in content) {
                    console.log("sending " + val + "=" + JSON.stringify(content[val]))
                    data.append(val, JSON.stringify(content[val]))
                }
                console.log("using " + method + " to " + url)
                request.send(data)
            } else {
                console.log("sending GET to " + url)
                request.send()
            }
        } else {
            request.send()
        }
    }
}
