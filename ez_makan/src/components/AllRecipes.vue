<template>
  <div class="container pt-4">
    <div class="pe-md-5 pe-lg-0 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-3">
      <RecipePreview v-for="r in recipes" v-bind:key="r._id" v-bind:recipe="r" class="px-2"/>        
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RecipePreview from './RecipePreview.vue'

const API_URL = "http://localhost:3000";

export default {
 name: "RecipesData",
 components:{
    RecipePreview
 },
 data: function () {
   return {
     recipes: [],
   };
 },
 mounted: async function () {
   let response = await axios.get(API_URL + "/recipes/all");
   this.recipes = response.data;
 },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  img{
    height:200px !important
  }
}
</style>