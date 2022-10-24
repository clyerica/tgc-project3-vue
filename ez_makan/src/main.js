import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightLong, faChevronLeft, faChevronRight, faFolderPlus, faHouse,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faHouse, faMagnifyingGlass, faFolderPlus, faArrowRightLong,faChevronRight, faChevronLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
