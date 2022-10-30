<template>
<div>
    <div class="card d-flex flex-column flex-md-column-reverse" v-on:click="recipeClicked" v-bind:style="{cursor:cursorType}"
    @mouseover="cursorType='pointer'"
    @mouseleave="cursorType='auto'">
        <div class="card-header d-flex flex-wrap justify-content-evenly text-bg-secondary">
          <span>
            <span class="badge text-bg-info me-1">{{recipe.cuisine}}</span>
          </span>
          <span v-for="d in recipe.diet" v-bind:key="d">
            <span class="badge text-bg-success me-1">{{d}}</span>
          </span>
        </div>
        <div class="row g-0">
          <img class="col-7 col-md-12" style="object-fit:cover; height:250px" v-bind:src="recipe.imageURL">
          <div class="card-body d-flex flex-column justify-content-center card-img-overlay d-none d-md-flex">
            <div class="py-2 px-2 img-overlay">
            <h5 class="card-title text-center mb-3" >{{recipe.title}}</h5>
            <h6 class="card-subtitle text-center" >Serves: {{recipe.serves}}</h6>
            </div>
          </div>
          <div class=" col-5 col-md-12 d-flex flex-column">
            <div class="card-body d-flex flex-column justify-content-center d-block d-md-none">
              <h5 class="card-title text-center mb-3">{{recipe.title}}</h5>
              <h6 class="card-subtitle text-center text-muted">Serves: {{recipe.serves}}</h6>
            </div>
            <div class="card-footer text-bg-warning text-center mt-auto d-block d-md-none" >
              Start Cooking
              <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
  export default{
    props:['recipe'],
    data: function() {
      return{
        cursorType:"auto"
      }
    },
    methods:{
      recipeClicked:function(){
        this.$emit('chooseRecipe', {...this.recipe})
      }
    }    
  }
</script>

<style scoped>
  .img-overlay{
    opacity: 75%;
    border-radius: 10px;
    background-color: cornsilk;
    color: black !important
  }
  .text-bg-secondary{
    background-color: beige !important;
  }
  .text-bg-info{
    background-color: khaki !important;
  }
  .text-bg-success{
    background-color: peru !important;
  }
  .card-subtitle{
    font-style:italic
  }
  .card{
    border-style: solid;
    border-width:3px;
    border-color: orange
  }
</style>