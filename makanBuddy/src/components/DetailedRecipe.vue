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
                    <div class="p-3 pe-4">
                        <p class='text-muted text-center'>By: {{recipe.username}}</p>
                        <ol>
                            <li v-for='m in recipe.method' v-bind:key='m' class='mb-2 pe-4'>{{m}}</li>
                        </ol> 
                    </div>    
                </div>
                <div class="tab-pane fade" id="edit-tab-pane" role="tabpanel" aria-labelledby="edit-tab" tabindex="0">
                    <RecipeForm v-bind:initialRecipe='recipe' @recipeSubmitted="submitEdit" class="pe-4 mt-4"/>
                </div>
                <div class="tab-pane fade" id="delete-tab-pane" role="tabpanel" aria-labelledby="delete-tab" tabindex="0">
                    <div class="p-3 pe-4 container" >
                        <p>Are you sure you want to delete {{recipe.title}}? This action cannot be undone!</p>
                        <button class='btn btn-dark my-3' v-on:click='goDelete'
                        v-bind:style="{backgroundColor: deleteColor}"
                        @mouseover="deleteColor='darkred !important'"
                        @mouseleave="deleteColor='black !important'">
                        Delete {{recipe.title}}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row d-none d-md-flex">
            <div class="col-12 col-md-4 ps-5 pe-4 pe-md-4 pt-3" id="ingredientsList">
                <h3>Ingredients</h3> 
                <p> Makes {{recipe.serves}} servings</p>
                <ul>
                    <li v-for='i in recipe.ingredients' v-bind:key='i'>{{i}}</li>
                </ul>
            </div>
            <div class="col-12 col-md-8 ps-4 pe-5 pt-3">
            <div class='d-flex justify content-end'>
                <h3 class='me-auto'>Method</h3>
                <button class="btn btn-light me-2" v-on:click="goEdit">Edit</button>
                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Delete
                </button>
                <div class='dropdown-menu p-3 text-center' style="width:350px">
                    <p>Are you sure you want to delete {{recipe.title}}? This action cannot be undone!</p>
                        <button class='btn btn-dark my-3'
                        v-bind:style="{backgroundColor: deleteColor}"
                        @mouseover="deleteColor='darkred !important'"
                        @mouseleave="deleteColor='black !important'"
                        v-on:click='goDelete'
                        >Delete {{recipe.title}}</button>
                </div>
            </div>
                <ol class='pt-3'>
                    <li v-for='m in recipe.method' v-bind:key='m' class='mb-2'>{{m}}</li>
                </ol>
                <p class='text-muted d-flex justify-content-end'><span>By: {{recipe.username}}</span></p>
            </div>
            
        </div>     
    </div>
    <button class='btn btn-light ms-5 my-3' v-if="this.editingRecipe==true" v-on:click="seeRecipe">
        <font-awesome-icon icon="fa-solid fa-chevron-left"/> Go back
    </button>
    <RecipeForm v-if="this.editingRecipe==true" v-bind:initialRecipe='recipe' @recipeSubmitted="submitEdit"/>
</div>
</template>

<style scoped>
    .nav-tabs{
        background-color: white;
        font-weight:bold
    }
    .nav-link{
        color:grey !important
    }
    .active{
        background-color: #fcf5c7 !important;
        color: black !important
    }
    #ingredientsList{
        background-color:floralwhite
    }
    .btn-light{
        background-color:ivory !important;
        border-style:solid;
        border-width:1px;
        border-color:black
    }
</style>
    
<script>
    import RecipeForm from './RecipeForm.vue'
    export default{
        props:['recipe'],
        components:{
            RecipeForm
        }, 
        data: function(){
            return ({
                editingRecipe: false,
                deleteColor: 'black !important'   
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
          seeRecipe: function(){
            this.editingRecipe=false
          },
          goDelete: function(){
            this.$emit('deleteSubmitted',{...this.recipe})
          }     
        }
    }
</script>