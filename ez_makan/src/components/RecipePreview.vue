<template>
<div>
    <div class="card">
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
          <div class=" col-5 col-md-12 d-flex flex-column">
            <div class="card-body d-flex flex-column justify-content-center">
              <h5 class="card-title text-center mb-3">{{recipe.title}}</h5>
              <h6 class="card-subtitle text-center text-muted">Serves: {{recipe.serves}}</h6>
            </div>
            <div class="card-footer text-bg-warning text-center mt-auto">
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
        props:['recipe']
    }
</script>