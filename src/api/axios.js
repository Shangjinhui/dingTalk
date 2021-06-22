import axios from 'axios';
import qs from 'qs'

const service = axios.create({
    baseURL: process.env.NODE_ENV == "development" ? process.env.VUE_APP_URL : Window.baseURL,
    timeout: 30000 // 请求超时时间
})
//请求拦截
service.interceptors.request.use(config => {

    return config
}, error => {
    Promise.reject(error)
})

//响应拦截
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.returnCode == 200) {
            return res
        } else {
            if (res.returnCode == 401 || res.returnCode == 302 || res.returnCode == 400) {
                console.log(11111111)
            }

            return Promise.reject(res)
        }
    },
    error => {
        if (error.message == "timeout of 30000ms exceeded") {
            console.log(11111111)
        }
        if (error.response.status) {
            console.log(11111111)
        }
        return Promise.reject(error)
    }
)

class Http {
    get(url, params, mode) {
        const newUrl = params ? this.build(url, params) : url
        console.log(newUrl)
        return this.request(newUrl, {
            method: 'GET'
        })
    }

    post(url, body, mode) {
        let option = {
            method: 'POST',
        }
        if (body) {
            option.body = body;
        }
        if (mode) option.mode = mode;
        return this.request(url, option)
    }

    put(url, body, mode) {
        let option = {
            method: 'PUT',
        }
        if (body) option.body = body;
        if (mode) option.mode = mode;
        return this.request(url, option)
    }

    delete(url, body, mode) {
        let option = {
            method: 'DELETE',
        }
        if (body) option.body = body;
        if (mode) option.mode = mode;
        return this.request(url, option)
    }

    patch(url, body, mode) {
        let option = {
            method: 'patch',
        }
        if (body) option.body = body;
        if (mode) option.mode = mode;
        return this.request(url, option)
    }

    build(url, params) { //get 方法调用
        const ps = []
        if (params) {
            for (let p in params) {
                if (encodeURIComponent(params[p])) {  //判断是否存在数值
                    ps.push(p + '=' + encodeURIComponent(params[p]));
                }

            }
        }
        return url + '?' + ps.join('&')
    }

    request(url, option) {
        return service({
            method: option.method,
            url: url,
            data: (option.mode == 'json' || option.mode == 'JSON') ? JSON.stringify(option.body) : qs.stringify(option.body),
            headers: {
                'Content-Type': (option.mode == 'json' || option.mode == 'JSON') ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded',
            }
        }).then(res => {
            if (res.returnCode == 200) {
                return Promise.resolve(res)

            } else {
                return Promise.reject({
                    message: '服务器返回错误'
                })
            }
        }).catch(err => {
            let data = {};
            if (err.response && err.response.data && err.response.data.message) {
                data = { message: err.response.data.message }
            } else if (err.message) {
                data = err.message
            } else {
                data = { message: '未知错误' }
            }
            return Promise.reject(data)
        })
    }
}
export default new Http();