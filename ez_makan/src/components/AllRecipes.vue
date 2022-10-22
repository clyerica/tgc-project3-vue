<template>
  <div class="container pt-4">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
      <div class="px-2" v-for="r in recipes" v-bind:key="r._id">
      <div class="card">
        <div class="card-header d-flex flex-wrap justify-content-evenly text-bg-secondary">
          <span>
            <span class="badge text-bg-info me-1">{{r.cuisine}}</span>
          </span>
          <span v-for="d in r.diet" v-bind:key="d">
            <span class="badge text-bg-success me-1">{{d}}</span>
          </span>
        </div>
        <div class="row g-0">
          <img class="col-7 col-md-12" style="object-fit:cover; height:250px" v-bind:src="r.imageURL">
          <div class=" col-5 col-md-12 d-flex flex-column">
            <div class="card-body d-flex flex-column justify-content-center">
              <h5 class="card-title text-center mb-3">{{r.title}}</h5>
              <h6 class="card-subtitle text-center text-muted">Serves: {{r.serves}}</h6>
            </div>
            <div class="card-footer text-bg-warning text-center mt-auto">
              Start Cooking
              <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </div>
          </div>
        </div>
      </div>          
    </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_URL = "http://localhost:3000";

export default {
 name: "RecipesData",
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