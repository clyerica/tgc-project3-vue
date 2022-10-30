<template>
<div>
    <div v-if="this.editingRecipe == false">
        <div class="d-flex flex-row justify-content-center py-2 bg-warning">
            <span v-for="d in recipe.diet" v-bind:key="d" class="badge text-bg-dark me-2 ">
                {{d}}
            </span>
        </div>
        <div class='d-block d-md-none'>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab" data-bs-target="#ingredients-tab-pane" type="button" role="tab" aria-controls="ingredients-tab-pane" aria-selected="true">Ingredients</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="method-tab" data-bs-toggle="tab" data-bs-target="#method-tab-pane" type="button" role="tab" aria-controls="method-tab-pane" aria-selected="false">Method</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="edit-tab" data-bs-toggle="tab" data-bs-target="#edit-tab-pane" type="button" role="tab" aria-controls="method-tab-pane" aria-selected="false">Edit</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="delete-tab" data-bs-toggle="tab" data-bs-target="#delete-tab-pane" type="button" role="tab" aria-controls="method-tab-pane" aria-selected="false">Delete</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel" aria-labelledby="ingredients-tab" tabindex="0">
                    <div class="p-3">
                        <p class='text-muted'> Makes {{recipe.serves}} servings</p>
                        <ul>
                            <li v-for='i in recipe.ingredients' v-bind:key='i'>{{i}}</li>
                        </ul>
                    </div>  
                </div>
                <div class="tab-pane fade" id="method-tab-pane" role="tabpanel" aria-labelledby="method-tab" tabindex="0">
                    <div class="p-3">
                        <p class='text-muted d-flex justify-content-end'><span>By: {{recipe.username}}</span></p>
                        <ol>
                            <li v-for='m in recipe.method' v-bind:key='m' class='mb-2'>{{m}}</li>
                        </ol> 
                    </div>    
                </div>
                <div class="tab-pane fade" id="edit-tab-pane" role="tabpanel" aria-labelledby="edit-tab" tabindex="0">
                    <RecipeForm v-bind:initialRecipe='recipe' @recipeSubmitted="submitEdit"/>
                </div>
                <div class="tab-pane fade" id="delete-tab-pane" role="tabpanel" aria-labelledby="delete-tab" tabindex="0">
                    <div class="p-3">
                        Are you sure you want to delete? This action cannot be undone!
                        <button class='btn btn-dark my-3'>Delete {{recipe.title}}</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row py-3 d-none d-md-flex">
            <div class="col-12 col-md-4 px-5 pe-md-4">
                <h3>Ingredients</h3> 
                <p> Makes {{recipe.serves}} servings</p>
                <ul>
                    <li v-for='i in recipe.ingredients' v-bind:key='i'>{{i}}</li>
                </ul>
            </div>
            <div class="col-12 col-md-8 px-5 ps-md-0">
            <div class='d-flex justify content-end'>
                <h3 class='me-auto'>Method</h3>
                <button class="btn btn-outline-dark me-2" v-on:click="goEdit">Edit</button>
                <button class="btn btn-dark" v-on:click="goDelete">Delete</button>
            </div>
                <ol>
                    <li v-for='m in recipe.method' v-bind:key='m' class='mb-2'>{{m}}</li>
                </ol>
                <p class='text-muted d-flex justify-content-end'><span>By: {{recipe.username}}</span></p>
            </div>
            
        </div>     
    </div>
    <RecipeForm v-if="this.editingRecipe==true" v-bind:initialRecipe='recipe' @recipeSubmitted="submitEdit"/>
</div>
</template>
    
<script>
    import RecipeForm from './RecipeForm.vue'
    export default{
        props:['recipe'],
        components:{
            RecipeForm
        }, 
        data: function(){
            return ({
                editingRecipe: false    
            })
        },
        methods:{
          goEdit: function(){
            this.editingRecipe=true
          },
          submitEdit:function (recipe){
            this.editingRecipe=false
            this.$emit('editSubmitted', recipe)
          },
          goDelete: function(){
            this.$emit('deleteSubmitted',{...this.recipe})
          }     
        }
    }
</script>