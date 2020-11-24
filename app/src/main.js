import Vue from 'vue'
import router from './router'
import axios from './plugins/axios'
import qs from 'qs.js'
import vuetify from "@/plugins/vuetify";
import store from "@/store"
import App from './App.vue'

Vue.use(axios)
Vue.prototype.qs = qs
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
