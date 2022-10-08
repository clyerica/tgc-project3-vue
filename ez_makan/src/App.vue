<template>
 <div>
   <div class="container-fluid">
     <ul class="nav nav-tabs">
       <li class="nav-item">
         <button
           class="nav-link active"
           aria-current="page"
           v-on:click="goAllRecipes"
         >
           Recipes
         </button>
       </li>
       <li class="nav-item">
         <button class="nav-link" v-on:click="goAddRecipe">Add New</button>
       </li>
     </ul>
   </div>
   <div>
       <AllRecipes v-if="this.page == 'all'" />
       <AddRecipe v-if="this.page == 'add'" />
     </div>
 </div>
</template>

<style>

</style>

<script>
import AllRecipes from "./components/AllRecipes";
import AddRecipe from "./components/AddRecipe"
export default {
 name: "App",
 components:{
   AllRecipes, AddRecipe
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