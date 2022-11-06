<template>
    <div class="list-group-item">
        <div class="d-flex"  v-if='!isEditing'>
            <p class="flex-fill ms-2">  {{item}}</p> 
            <button type="button" class="btn" v-on:click='startEdit'>
                <font-awesome-icon icon="fa-regular fa-pen-to-square" />
            </button>
            <button type="button" class="btn" v-on:click='removeitem'>
                <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
        </div>
        <div class="d-flex" v-if='isEditing'>
             <textarea class="form-control text-area ms-2" v-model='editedItem'/> 
            <button type="button" class="btn" v-on:click='submitEdit'>
                <font-awesome-icon icon="fa-solid fa-check" />
            </button>
            <button type="button" class="btn" v-on:click='cancelEdit'>
                <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
        </div>
        <p v-if='showItemError' class='ms-2 errorMsg'>This field cannot be empty</p>
    </div>
</template>

<script>
    export default{
        props: ['item'],
        data: function(){
            return({
                isEditing: false,
                editedItem:[...this.item].join(''),
                showItemError:false
            })
        },
        methods:{
            removeitem: function(){
                let item=[...this.item].join('')
                this.$emit('deleteItem', item)
            },
            startEdit: function(){
                this.isEditing=true
            },
            cancelEdit: function(){
                this.isEditing=false
                this.showItemError=false
                this.editedItem=[...this.item].join('')
            },
            submitEdit(){
                if (this.editedItem.length==0){
                    this.showItemError=true
                }
                else{
                    this.showItemError=false
                    this.$emit('editItem', {originalItem: [...this.item].join(''), editedItem:this.editedItem})
                }
            }
        }
    }
</script>

<style scoped>
    .errorMsg{
        color: red;
        font-size: 0.75rem
    }
</style>