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


// Валидация телефона,ввода только цифр
Vue.directive('phone',{
  bind(el){
      el.oninput = function(e){
          if(!e.isTrusted){
              return
          }
          const x = this.value.replace(/\D/g,'').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)

          if(!x[2] && x[1] !==''){
              this.value = x[1] === '8' ? x[1]: '8' + x[1]
          }else{
              this.value = !x[3] ? x[1] + x[2] : x[1] + '('+x[2]+')' + x[3]+(x[4] ? '-' +x[4]: '')
          }
      }
  },
})  