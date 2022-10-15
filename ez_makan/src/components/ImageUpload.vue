<template>
 <div>
   <Uploadcare publicKey="87fe3f3a8488ce1e20c9">
     <button class="btn btn-warning btn-sm">Upload</button>
   </Uploadcare>
 </div>
</template>

<script>
import axios from "axios";
import Uploadcare from "uploadcare-vue";
const baseApiURL = "<your API base URL>";
export default {
 components: {
   Uploadcare,
 },
 methods: {
   async processUploadedImage(params) {
     const imageData = {
       name: params.name,
       url: params.cdnUrl,
     };
     const response = await axios.post(baseApiURL + "images", imageData);
     console.log(response.data);
   },
 },
};

</script>

<style scoped>
</style>