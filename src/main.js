import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

import { Button } from 'element-ui'


Vue.use(Button)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

