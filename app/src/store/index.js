import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo:{
            token: '',
            id: 0,
        }
    },
    getters: {
        getUser: state => state.userInfo,
    },
    mutations: {
        setUserInfo (state, userInfo) {
            state.userInfo = userInfo
        }
    }
})