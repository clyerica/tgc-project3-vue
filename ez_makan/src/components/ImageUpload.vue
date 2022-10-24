<template>
 <div>
   <Uploadcare publicKey="87fe3f3a8488ce1e20c9" v-on:success="processUploadedImage"
>
     <button class="btn btn-warning">Upload</button>
   </Uploadcare>
 </div>
</template>

<script>
import Uploadcare from "uploadcare-vue";
export default {
 components: {
   Uploadcare,
 },
 methods: {
   processUploadedImage(params) {
    let imageLink=params.cdnUrl
    this.$emit('addedImage', imageLink)
     console.log(params.cdnUrl);
   },
 },
};

</script>

<style scoped>
</style>