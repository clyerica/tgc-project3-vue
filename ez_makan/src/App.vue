<template>
 <div>
   <nav class= "navbar fixed-top bg-warning d-none d-md-block">
        <div class="container d-flex flex-row justify-content-start"> 
            <a class="navbar-brand">MakanBuddy</a>
            <div class="nav-item mx-3">
              <a class ="nav-link" v-on:click="goHome">
                Home 
              </a>
            </div>
            <div class="nav-item mx-3">
              <a
                class="nav-link active"
                aria-current="page"
                v-on:click="goAllRecipes"
              >
                Recipes
              </a>
            </div>
            <div class="nav-item mx-3">
              <a class="nav-link active" v-on:click="goAddRecipe">
               Add Recipe
              </a>
            </div>
          </div>
      </nav>
    
    <main>
    <div id="coverImage" class="d-none d-md-block" 
    v-bind:style="{background:coverImageUrl, backgroundSize:coverImageSize}"
    >
    <h1 class="my-auto text-center" style="transform:translateY(60px)" >{{this.message}}</h1>
    </div>
      <div>
        <HomePage v-if="this.page == 'home'" />
        <div class="d-flex flex-row" v-if="this.page == 'all'" >
          <SearchForm class="d-none d-md-block py-4 px-3 col-md-3" id="searchBar"/>
          <AllRecipes class="col-md-9"/>
        </div>
        <AddRecipe v-if="this.page == 'add'" />
      </div>
    </main> 
    <footer class="text-bg-dark" style="height:100px">
    </footer>
  <nav class= "navbar fixed-bottom bg-warning d-md-none">
    <div class="container-fluid d-flex justify-content-evenly"> 
      <div class="nav-item">
        <a
          class="nav-link active"
          v-on:click="goAllRecipes"
        >
          <font-awesome-icon icon="fa-solid fa-house"/>
        </a>
      </div>
        <div class="nav-item dropup dropup-center">
          <span class="nav-link dropdown-toggle" role="button" data-bs-target="dropupSearch" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </span>
          <SearchForm class="dropdown-menu overflow-auto mb-2" id="dropupSearch"/>
        </div>
        <div class="nav-item">
          <a class="nav-link" v-on:click="goAddRecipe">
            <font-awesome-icon icon="fa-solid fa-folder-plus" />
          </a>
        </div>
      </div>
    </nav>
 </div>
</template>

<style>
main{
  padding-bottom:56px
}
#dropupSearch{
  height:400px; 
  min-width:350px !important;
  position: absolute;
  transform: translateX(-46%);
  background-color: #fcf5c7
}
#searchBar{
  min-width:250px;
  background-color: #fcf5c7
}
#coverImage{
  height:200px;
  width:100vw;
  
}

@media screen and (min-width: 768px) {
  main{
    padding-top:56px;
    padding-bottom:0px
  }
}
</style>

<script>
import HomePage from "./components/HomePage";
import AllRecipes from "./components/AllRecipes";
import AddRecipe from "./components/AddRecipe";
import SearchForm from "./components/SearchForm";
export default {
 name: "App",
 components:{
   AllRecipes, AddRecipe, SearchForm, HomePage
 },
 data:function(){
   return {
     'page':'all',
     coverImageUrl:'url("pexels_food.jpg") 0% 0% / cover',
     coverImageSize:'cover',
     message:'Browse Recipes'
   }
 },
 methods: {
    goHome: function () {
      this.page="home"
    },
    goAllRecipes: function () {
      this.page = "all";
      this.coverImageUrl='url("pexels_food.jpg") 0% 0% / cover'
      this.message='Browse Recipes'
    },
    goAddRecipe: function () {
      this.page = "add";
      this.coverImageUrl='url("pexels_recipe.jpg") 0% 50% / cover'
      this.message='Add Recipe'
     },
 }
};
</script>