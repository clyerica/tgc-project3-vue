<template>
    <li class="list-group-item d-flex">
        <p class="flex-fill me-2">  {{item}}</p> <button type="button" class="btn-close" v-on:click='removeitem'></button>
    </li>
</template>

<script>
    export default{
        props: ['item'],
        methods:{
            removeitem: function(){
                let item=[...this.item].join('')
                this.$emit('deleteItem', item)
            }
        }
    }
</script>