<template>
 <div>
   <nav class= "navbar fixed-bottom bg-warning">
    <div class="container-fluid d-flex justify-content-evenly"> 
          <div class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              v-on:click="goAllRecipes"
            >
              <font-awesome-icon icon="fa-solid fa-house"/>
            </a>
          </div>
          <div class="nav-item dropup dropup-center">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-target="dropupSearch" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </a>
            <SearchForm class="dropdown-menu overflow-auto mb-2" id="dropupSearch"/>
          </div>
          <div class="nav-item">
            <a class="nav-link active" v-on:click="goAddRecipe">
              <font-awesome-icon icon="fa-solid fa-folder-plus" />
            </a>
          </div>
      </div>
   </nav>
   <main>
       <AllRecipes v-if="this.page == 'all'" />
       <AddRecipe v-if="this.page == 'add'" />
    </main> 

 </div>
</template>

<style>
#dropupSearch{
    height:400px; 
    min-width:350px !important;
    position: absolute;
    transform: translateX(-46%)
}
</style>

<script>
import AllRecipes from "./components/AllRecipes";
import AddRecipe from "./components/AddRecipe"
import SearchForm from "./components/SearchForm"
export default {
 name: "App",
 components:{
   AllRecipes, AddRecipe, SearchForm
 },
 data:function(){
   return {
     'page':'all'
   }
 },
 methods: {
   goAllRecipes: function () {
     this.page = "all";
   },
   goAddRecipe: function () {
     this.page = "add";
   },
 }
};
</script>