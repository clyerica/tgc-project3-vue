<template>
 <div>
   <nav class= "navbar  fixed-top bg-warning d-none d-md-block">
        <div class="container-fluid d-flex flex-row justify-content-start"> 
            <a class="navbar-brand">
              <font-awesome-icon icon="fa-solid fa-kitchen-set" />
              MakanBuddy</a>
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
    
  <main d-flex align-items-stretch>
    <div id="coverImage"
    v-bind:style="{background:coverImageUrl, backgroundSize:coverImageSize}"
    >
      <h1 class="my-auto text-center text-bg-light py-2 mx-5" style="transform:translateY(65px); opacity:75%" >{{this.message}}</h1>
    </div>
    <div>
      <HomePage v-if="this.page == 'home'" />
      <div class="d-flex flex-row" v-if="this.page == 'all'" >
        <SearchForm class="d-none d-md-block py-4 px-md-3 col-md-3" id="searchBar" @searchSubmitted="filterResults"/>
        <AllRecipes class="col-md-9" v-bind:recipesData="recipes" v-if="recipes.length!=0" 
          @findRecipe="showRecipe"/>
        <div v-else class="p-4">
          <h4>No Recipes Found!</h4>
          <button class="btn btn-light" v-on:click="goAllRecipes">Click here to return to all recipes</button>
        </div>
      </div>
      <RecipeForm v-if="this.page == 'add'" @recipeSubmitted='addRecipe' id="addForm" class="mt-4" 
          v-bind:initialRecipe="{title:'', imageURL:'', course:[], diet:[],  cuisine:'', serves:'', ingredients:[], method:[], username:''}" />
      <DetailedRecipe v-if="this.page=='recipe'" v-bind:recipe='this.r' 
        @editSubmitted="editRecipe" @deleteSubmitted="deleteRecipe"/>
    </div>
  </main>
  <footer class="d-none d-md-block">
    <div style='background-color: black; height:100px'>
    </div>
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
        <div class="nav-item dropup dropup-center" data-bs-auto-close="true">
          <span class="nav-link dropdown-toggle" role="button" data-bs-target="dropupSearch" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </span>
          <SearchForm class="dropdown-menu overflow-auto mb-2" id="dropupSearch"
          @searchSubmitted="filterResults"/>
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
  padding-bottom:56px;
  background-color: #fcf5c7;
  min-height: 100vh
}
#dropupSearch{
  height:400px; 
  min-width:350px !important;
  position: absolute;
  transform: translateX(-46%);
  
}
#searchBar{
  min-width:250px;
  background-color:ivory
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
import AllRecipes from "./components/AllRecipes";
import RecipeForm from "./components/RecipeForm";
import SearchForm from "./components/SearchForm";
import DetailedRecipe from "./components/DetailedRecipe";
import axios from "axios";

const API_URL = "http://localhost:3000";

export default {
 name: "App",
 components:{
   AllRecipes, RecipeForm, SearchForm, DetailedRecipe
 },
  created: async function () {
   let response = await axios.get(API_URL + "/recipes/all");
   this.recipes = response.data
 },
 data:function(){
   return {
     page:'all',
     coverImageUrl:'url("pexels_food.jpg") 0% 0% / cover',
     coverImageSize:'cover',
     message:'Browse Recipes',
     recipes:[],
     r:{}
   }
 },
 methods: {
    goAllRecipes: async function () {
      window.scrollTo(0, 0);
      let response = await axios.get(API_URL + "/recipes/all");
      this.recipes = response.data
      this.coverImageUrl='url("pexels_food.jpg") 0% 0% / cover'
      this.message='Browse Recipes'
      this.page = "all";
    },
    goAddRecipe: function () {
      window.scrollTo(0, 0);
      this.coverImageUrl='url("pexels_recipe.jpg") 0% 50% / cover'
      this.message='Add Recipe'
      this.page = "add";
     },
    filterResults: async function (newSearch) {
      window.scrollTo(0, 0);
      let queryString = Object.keys(newSearch).map(key => key + '=' + newSearch[key]).join('&');
      let response=await axios.get(API_URL+"/recipes?"+queryString)
      this.recipes=response.data
      this.page='all'
     },
    addRecipe: async function (newRecipe) {
      window.scrollTo(0, 0);
      this.page="all"
      this.coverImageUrl='url("pexels_food.jpg") 0% 0% / cover'
      this.message='Browse Recipes'
      let response = await axios.post(API_URL + "/recipes/create", newRecipe);
      let getResponse = await axios.get(API_URL + "/recipes/all");
      this.recipes = getResponse.data      
      console.log(response.data);
     },
    showRecipe: function(recipe){
      this.r=recipe
      window.scrollTo(0, 0)
      this.coverImageUrl='url('+recipe.imageURL+') 0% 40% / cover'
      this.message= recipe.title
      this.page='recipe'
     },
    editRecipe: async function(editedRecipe){
      let updates={
        title: editedRecipe.title,
        imageURL: editedRecipe.imageURL,
        ingredients: editedRecipe.ingredients,
        course: editedRecipe.course, 
        cuisine: editedRecipe.cuisine,
        diet: editedRecipe.diet,
        serves: editedRecipe.serves,
        method:editedRecipe.method
      }
      let response=await axios.put(API_URL+'/recipes/'+editedRecipe._id+'/update', updates)
      console.log(response.data)
    },
    deleteRecipe:async function(deletedRecipe){
      this.page='all'
      this.coverImageUrl='url("pexels_food.jpg") 0% 0% / cover'
      this.message='Browse Recipes'
      let response=await axios.delete(API_URL+'/recipes/'+deletedRecipe._id+'/delete')
      let getResponse = await axios.get(API_URL + "/recipes/all");
        this.recipes = getResponse.data
      console.log(response)
    }
 }
};
</script>