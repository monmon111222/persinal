import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'font-awesome/css/font-awesome.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/global.css'
import device from 'vue-device-detector'
import 'wowjs/css/libs/animate.css'
import wow from 'wowjs'

Vue.prototype.$wow = wow
Vue.use(device)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(VueSidebarMenu)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
