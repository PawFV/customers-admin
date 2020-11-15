import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import apiUsers from './api/index'
Vue.prototype.$api = apiUsers
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  apiUsers,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
