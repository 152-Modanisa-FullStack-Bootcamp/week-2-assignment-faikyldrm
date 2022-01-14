<template>
<div class="favoritesContainer">
<fav-detail  v-for="video in favVideos" :key="video.id" :vItem="video"/>
</div>
</template>

<script>
import FavDetail from "@/components/FavDetail";
import axios from "axios";
export default {
  name: "FavoritesPage",
  components: {FavDetail},
  data(){
    return{
      favVideos:[]
    }
  },
  async created() {
    const {data} = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos?favorite=true");
    this.favVideos = data;
  }
}

</script>

<style scoped>
.favoritesContainer{
  display: flex;
  flex-direction: column;

}
</style>