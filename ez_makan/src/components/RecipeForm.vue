<template>
<div class="container py-4 recipeForm" >
    <div v-if='pageNumber==="1"' class="container row g-3">
        <div class="col-12">
            <label for="username" class="form-label">Your Name </label> 
            
            <input type="text" class="form-control" id="username" placeholder="Gordon Ramsey" v-model="recipe.username"> 
            <p v-if='!usernameOk && this.showPage1Error' class='errorMsg'>Name must be min. 3 characters</p>
        </div>
        <div class="col-12 d-flex">
            <div class="flex-fill me-3">
                <label for="recipeTitle" class="form-label">Recipe Name</label>  
                <input type="text" class="form-control" id="recipeTitle" placeholder="Name your recipe" v-model="recipe.title">
                <p v-if='!titleOk && this.showPage1Error' class='errorMsg'>Title must be min. 4 characters</p>
            </div>
            <div>
            <label for="addImage">Dish Image</label> 
            <imageUpload class="my-2" @addedImage='insertImage' id='addImage'/>
             <p v-if='!imageOk && this.showPage1Error' class='errorMsg'>Please upload an image of your dish</p>
        </div>
        </div>
        <div class="row  col-md-4">
            <div class="col-6 col-md-12">
                <label for="recipeServes" class="form-label">Serves</label>
                <input type="number" class="form-control" id="recipeServes" v-model="recipe.serves" min="1">
                <p v-if='!servesOk && this.showPage1Error' class='errorMsg'>Please add serving size</p>
            </div>
            <div class="col-6 col-md-12">
                <label for="recipeCuisine" class="form-label">Cuisine</label>
                <select class="form-select" id="recipeCuisine" v-model="recipe.cuisine">
                    <option value="">Open menu</option>
                    <option value="african">African</option>
                    <option value="american">American</option>
                    <option value="asian">Asian</option>
                    <option value="british">British</option>
                    <option value="chinese">Chinese</option>
                    <option value="european">European</option>
                    <option value="french">French</option>
                    <option value="fusion">Fusion</option>
                    <option value="german">German</option>
                    <option value="indian">Indian</option>
                    <option value="indonesian">Indonesian</option>
                    <option value="italian">Italian</option>
                    <option value="japanese">Japanese</option>
                    <option value="korean">Korean</option>
                    <option value="malay">Malay</option>
                    <option value="mexican">Mexican</option>
                    <option value="philippines">Philippines</option>
                    <option value="russian">Russian</option>
                    <option value="singaporean">Singaporean</option>
                    <option value="spanish">Spanish</option>
                    <option value="thai">Thai</option>
                    <option value="turkish">Turkish</option>
                    <option value="vietnamese">Vietnamese</option>
                    <option value="western">Western</option>
                </select>
                <p v-if='!cuisineOk && this.showPage1Error' class='errorMsg'>Please choose a cuisine</p>
            </div>
        </div>
        <div class="col-6 col-md-4">
        <label class="form-label">Course</label>
        <div class="d-flex flex-wrap justify-content-start">
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="recipeBreakfast" value="breakfast" v-model="recipe.course">
                <label class="form-check-label" for="recipeBreakfast">Breakfast</label>
            </div>
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="recipeLunch" value="lunch" v-model="recipe.course">
                <label class="form-check-label" for="recipeLunch">Lunch</label>
            </div>
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="recipeDinner" value="dinner" v-model="recipe.course">
                <label class="form-check-label" for="recipeDinner">Dinner</label>
            </div>
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="recipeAppetiser" value="appetiser" v-model="recipe.course">
                <label class="form-check-label" for="recipeAppetiser">Appetiser</label>
            </div>
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="recipeDessert" value="dessert" v-model="recipe.course">
                <label class="form-check-label" for="recipeDessert">Dessert</label>
            </div>
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="recipeDrink" value="drink" v-model="recipe.course">
                <label class="form-check-label" for="recipeDrink">Drink</label>
            </div>
            </div>
            <p v-if='!courseOk && this.showPage1Error' class='errorMsg'>Please choose at least one course type</p>
        </div> 
        <div class="col-6 col-md-4">
            <label class="form-label">Diet</label>
            <div class="d-flex flex-wrap ">
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="recipeVegetarian" value="vegetarian" v-model="recipe.diet">
                    <label class="form-check-label" for="recipeVegetarian">Vegetarian</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="recipeVegan" value="vegan" v-model="recipe.diet">
                    <label class="form-check-label" for="recipeVegan">Vegan</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="recipeHalal" value="halal" v-model="recipe.diet">
                    <label class="form-check-label" for="recipeHalal">Halal</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="recipeKosher" value="kosher" v-model="recipe.diet">
                    <label class="form-check-label" for="recipeHalal">Kosher</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="recipeGlutenFree" value="glutenfree" v-model="recipe.diet">
                    <label class="form-check-label" for="recipeGlutenFree">Gluten-free</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="recipeDairyFree" value="dairyfree" v-model="recipe.diet">
                    <label class="form-check-label" for="recipeDairyFree">Dairy-free</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="recipeNutsFree" value="nutsfree" v-model="recipe.diet">
                    <label class="form-check-label" for="recipeNutsFree">Nuts-free</label>
                </div>
            </div>
        </div>
    </div>

    <div v-if='pageNumber==="2"' container row g-3>
        <div class="col-12">
            <label for="recipeIngredient" class="form-label">Ingredients List</label> 
            <input type="text" class="form-control" id="recipeIngredient" placeholder="Press enter to add each ingredient individually"
             v-on:keyup.enter='addIngredient' v-model='newIngredient'/>
        </div>
        <p v-if='!ingredientOk && this.showIngredientError' class='errorMsg'>Field cannot be empty. Please type in an ingredient.</p>
        <div class="col-12" v-if="recipe.ingredients.length!==0">
            <ul class="list-group list-group">
                <ListItem v-for='i in recipe.ingredients' v-bind:key='i' v-bind:item='i' 
                @deleteItem='ingredientDeleted' @editItem='ingredientEdited'/>
            </ul>
        </div>
        <p v-if='this.recipe.ingredients.length==0 && this.showPage2Error' class='errorMsg'>Please add at least one ingredient</p>
    </div>

    <div v-if='pageNumber==="3"' container row g-3>
        <div class="col-12">
            <label for="recipeMethod" class="form-label">How to make <span style='font-weight:bold'>{{recipeName}}</span></label> 
            <textarea class="form-control" id="recipeMethod" rows="3" placeholder="Press enter to add each step of the recipe individually" 
            v-on:keyup.enter='addStep' v-model='newStep'></textarea>
        </div>
        <p v-if='!methodOk && this.showMethodError' class='errorMsg'>Field cannot be empty. Please type in a step.</p>
        <div class="col-12" v-if="recipe.method.length!==0">
            <ol class="list-group">
                <ListItem v-for='m in recipe.method' v-bind:key='m' v-bind:item='m' 
                @deleteItem='stepDeleted' @editItem='stepEdited'/>
            </ol>
        </div>
        <p v-if='this.recipe.method.length==0 && this.showPage3Error' class='errorMsg'>Please add at least one step</p>
    </div>
    <div class="mt-4 d-flex justify-content-center">
        <button class='btn' v-if="pageNumber!=='1'" v-on:click="goPrevious">
            <font-awesome-icon icon="fa-solid fa-chevron-left" /> Previous Page
        </button>
        <button class='btn' v-if="pageNumber!=='3'" v-on:click="goNext">
            Next Page <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
        <button v-if='pageNumber==="3"' v-on:click='submitRecipe' class="btn btn-warning">Submit! <font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
    </div>
</div>
</template>

<style scoped>
    .recipeForm{
        background-color: ivory;
        border-radius:10px
    }
    .errorMsg{
        color: red;
        font-size: 0.75rem
    }
</style>

<script>
    import ImageUpload from './ImageUpload.vue'
    import ListItem from './ListItem.vue'

    export default {
        components:{
        ImageUpload, ListItem
        },
        props:['initialRecipe'],
        data: function(){
            return{
                recipe: {...this.initialRecipe},
                newStep:'',
                newIngredient:'',
                pageNumber:'1',
                showPage1Error:false,
                showPage2Error:false,
                showIngredientError:false,
                showPage3Error:false
            }
        },
        computed: {
            recipeName: function(){
                let name=this.recipe.title.split(' ')
                name = name.map(function(n){
                    name=n[0].toUpperCase()+n.substring(1)
                    return name
                })
                return name.join(' ')
            },
            usernameOk: function(){
                let usernameOk=true
                this.recipe.username.length<3 ? usernameOk=false : usernameOk=true
                return usernameOk
            },
            titleOk:function(){
                let titleOk=true
                this.recipe.title.length<4 ? titleOk=false : titleOk=true
                return titleOk
            },
            imageOk: function(){
                let imageOk=true
                this.recipe.imageURL=='' ? imageOk=false:imageOk=true
                return imageOk
            },
            servesOk: function(){
                let servesOk=true
                this.recipe.serves=='' ? servesOk=false:servesOk=true
                return servesOk
            },
            cuisineOk: function(){
                let cuisineOk=true
                this.recipe.cuisine=='' ? cuisineOk=false:cuisineOk=true
                return cuisineOk
            },
            courseOk:function(){
                let courseOk=true
                this.recipe.course.length==0 ? courseOk=false : courseOk=true
                return courseOk
            },
            ingredientOk:function(){
                let ingredientOk=true
                this.newIngredient.trim().length==0 ? ingredientOk=false : ingredientOk=true
                return ingredientOk
            },
            methodOk:function(){
                let methodOk=true
                this.newStep.trim().length==0 ? methodOk=false : methodOk=true
                return methodOk
            }
        },
        methods: {
            insertImage: function(imageLink){
                this.recipe.imageURL=imageLink
            },
            submitRecipe:function(){
                if (this.recipe.method.length==0){
                    this.showPage2Error=true
                }
                else{
                    this.$emit('recipeSubmitted', {...this.recipe})
                    this.showPage3Error=false
                }
                
            },
            addStep: function(){
                if (!this.methodOk){
                    this.showMethodError=true
                }
                else{
                    this.recipe.method.push(this.newStep)
                    this.newStep=''
                    this.showMethodError=false
                }
                
            },
            addIngredient: function () {
                if (!this.ingredientOk){
                    this.showIngredientError=true
                }
                else{
                    this.recipe.ingredients.push(this.newIngredient)
                    this.newIngredient=''
                    this.showIngredientError=false
                }
            },
            stepDeleted:function(step){
                let steps = this.recipe.method.filter(function(m) {
                    return m != step
                })
                this.recipe.method=steps
            },
            ingredientDeleted:function(ingredient){
                let ingredients=this.recipe.ingredients.filter(function(i){
                    return i!= ingredient
                })
                this.recipe.ingredients=ingredients
            },
            stepEdited: function(details){
                let stepIndex = this.recipe.method.findIndex( s => s == details.originalItem);          
                this.$set(this.recipe.method, stepIndex, details.editedItem);
            },
            ingredientEdited: function(details){
                let ingredientIndex = this.recipe.ingredients.findIndex( i => i == details.originalItem);          
                this.$set(this.recipe.ingredients, ingredientIndex, details.editedItem);
            },
            goPrevious: function(){
                if (this.pageNumber==='2'){
                    this.pageNumber='1'
                }
                else if (this.pageNumber==='3'){
                    this.pageNumber='2'
                }
            },
            goNext: function(){
                if (this.pageNumber==='2'){
                    if (this.recipe.ingredients.length==0){
                        this.showPage2Error=true
                    }
                    else{
                        this.pageNumber='3'
                    }
                }
                else if (this.pageNumber==='1'){
                    if (this.usernameOk){
                        this.pageNumber='2'
                        this.showPage1Error=false
                    }
                    if (!this.usernameOk||!this.imageOk||!this.courseOk||!this.cuisineOk||!this.servesOk||!this.titleOk){
                        this.showPage1Error=true
                    }
                }
            }
        }      
    }
</script>

