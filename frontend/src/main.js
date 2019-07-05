import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import { router } from './_helpers'
import { store } from './_store'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VeeValidate, { fieldsBagName: 'veeFields' })

Vue.config.productionTip = false

// import { configureFakeBackend } from './_helpers'
// configureFakeBackend()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
