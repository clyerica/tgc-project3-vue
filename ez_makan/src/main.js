import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router";
import store from './store'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightLong, faCheck, faChevronLeft, faChevronRight, faFolderPlus, faHouse,faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import AllRecipes from "./components/AllRecipes";
import RecipeForm from "./components/RecipeForm";
import DetailedRecipe from "./components/DetailedRecipe";
import { faPenToSquare} from '@fortawesome/free-regular-svg-icons';

library.add(faHouse, faMagnifyingGlass, faFolderPlus, faArrowRightLong,faChevronRight, faChevronLeft, faPenToSquare, faXmark, faCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(Router);

 let router = new Router({
  routes: [
    {
      path: "/",
      name: "Browse Recipes",
      component: AllRecipes
    },
    {
      path: "/add",
      name: "Add Recipes",
      component: RecipeForm
    },
    {
      path: "/recipe/:id",
      name: "Recipe Details",
      component: DetailedRecipe
    }
  ]
 });
 

new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
