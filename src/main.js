import Vue from 'vue'
import App from './App.vue'
import Vuelidate from '@vuelidate/core'
import VueMask from 'v-mask'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueMask)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

