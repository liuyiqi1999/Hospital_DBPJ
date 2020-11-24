import Vue from 'vue'
import axios from 'axios'
import router from '../router'

// axios默认配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://192.168.1.111:8085/'

const _axios = axios.create()

_axios.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    },
)

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        if (response.status === 403) {
            router.replace({
                path: '/user/login',
            })
        }
        return response
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error)
    },
)

Plugin.install = function (Vue) {
    Vue.axios = _axios
    window.axios = _axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get () {
                return _axios
            },
        },
        $axios: {
            get () {
                return _axios
            },
        },
    })
}

Vue.use(Plugin)

export default Plugin
