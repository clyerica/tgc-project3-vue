<template>
<div>
    <div class="dropdown-item py-2 px-3 d-flex flex-column overflow-auto" >
        <div class="mb-2 d-flex justify-content-between">
        <h3>Search</h3>
        <button class="btn btn-sm btn-outline-secondary" v-on:click="resetSearch">Reset</button>
        </div>
        <div class="mb-3">
            <label for="searchTitle" class="form-label">Recipe Name</label>
            <input type="text" class="form-control" id="searchTitle" placeholder="Search recipes" v-model="searchTitle">
        </div>
        <div class="mb-3">
        <label class="form-label">Course</label>
        <div class="d-flex flex-wrap justify-content-start">
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="searchBreakfast" value="breakfast" v-model="searchCourse">
                <label class="form-check-label" for="searchBreakfast">Breakfast</label>
            </div>
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="searchLunch" value="lunch" v-model="searchCourse">
                <label class="form-check-label" for="searchLunch">Lunch</label>
            </div>
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="searchDinner" value="dinner" v-model="searchCourse">
                <label class="form-check-label" for="searchDinner">Dinner</label>
            </div>
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="searchAppetiser" value="appetiser" v-model="searchCourse">
                <label class="form-check-label" for="searchAppetiser">Appetiser</label>
            </div>
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="searchDessert" value="dessert" v-model="searchCourse">
                <label class="form-check-label" for="searchDessert">Dessert</label>
            </div>
            <div class="form-check me-3">
                <input type="checkbox" class="form-check-input" id="searchDrink" value="drink" v-model="searchCourse">
                <label class="form-check-label" for="searchDrink">Drink</label>
            </div>
            </div>
        </div>
        <div class="mb-3">
            <label for="searchCuisine" class="form-label">Cuisine</label>
            <select class="form-select" id="searchCuisine" v-model="searchCuisine">
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
        </div>
        <div class="mb-3">
            <label class="form-label">Diet</label>
            <div class="d-flex flex-wrap ">
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="searchVegetarian" value="vegetarian" v-model="searchDiet">
                    <label class="form-check-label" for="searchVegetarian">Vegetarian</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="searchVegan" value="vegan" v-model="searchDiet">
                    <label class="form-check-label" for="searchVegan">Vegan</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="searchHalal" value="halal" v-model="searchDiet">
                    <label class="form-check-label" for="searchHalal">Halal</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="searchKosher" value="kosher" v-model="searchDiet">
                    <label class="form-check-label" for="searchKosher">Kosher</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="searchGlutenFree" value="glutenfree" v-model="searchDiet">
                    <label class="form-check-label" for="searchGlutenFree">Gluten-free</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="searchDairyFree" value="dairyfree" v-model="searchDiet">
                    <label class="form-check-label" for="searchDairyFree">Dairy-free</label>
                </div>
                <div class="form-check me-3">
                    <input type="checkbox" class="form-check-input" id="searchNutsFree" value="nutsfree" v-model="searchDiet">
                    <label class="form-check-label" for="searchNutsFree">Nuts-free</label>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label for="searchServes" class="form-label">Serves</label>
            <input type="number" class="form-control" id="searchServes" v-model="searchServes" min="1">
        </div>
        <button class="btn btn-warning" v-on:click="searchFilter">Look for recipes!</button>
    </div>
</div>
</template>

<script>
    export default {
        data: function(){
            return{
                searchTitle:"",
                searchCourse:[],
                searchCuisine:"",
                searchDiet:[],
                searchServes:""
            }
        },
        methods: {
            resetSearch: function () {
                this.searchTitle="",
                this.searchCourse=[],
                this.searchCuisine="",
                this.searchDiet=[],
                this.searchServes=""
            },
            searchFilter:function () {
                let newSearch={}
                if (this.searchTitle){
                    newSearch.title=this.searchTitle
                }
                if(this.searchCourse.length>0){
                    newSearch.course=this.searchCourse.join('+')
                }
                if(this.searchCuisine){
                    newSearch.cuisine=this.searchCuisine
                }
                if (this.searchDiet.length>0){
                    newSearch.diet=this.searchDiet.join('+')
                }
                if (this.searchServes){
                    newSearch.serves=parseInt(this.searchServes)
                }
                this.$emit('searchSubmitted', newSearch)
            }
        }      
    }
</script>

<style>
    form{
        background-color: floralwhite
    }
</style>