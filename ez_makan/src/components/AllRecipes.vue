<template>
  <div class="container py-4">
    <div class="pe-md-5 pe-lg-0 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-3 d-flex algin-items-stretch">
      <RecipePreview v-for="r in recipesData" v-bind:key="r._id" v-bind:recipe="r" class="px-2 align-self-stretch" 
      @chooseRecipe="recipeChosen"/>        
    </div>
  </div>
</template>

<script>
import RecipePreview from './RecipePreview.vue'


export default {
 props:['recipesData'],
 components:{
    RecipePreview
 }, 
 methods:{
  recipeChosen:function (recipe) {
    this.$emit('findRecipe', recipe)
    }
 }
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  img{
    height:200px !important
  }
}
</style>