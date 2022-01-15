<template>
<div class="favoritesContainer">
<fav-detail  v-for="video in getFavorites" :key="video.id" :vItem="video"/>
</div>
</template>

<script>
import FavDetail from "@/components/FavDetail";
//import axios from "axios";
import  {mapGetters} from "vuex"
export default {
  name: "FavoritesPage",
  components: {FavDetail},
  data(){
    return{
      favVideos:[]
    }
  },
  computed:{
    ...mapGetters(["getFavorites"])
  }
}

</script>

<style scoped>
.favoritesContainer{
  display: flex;
  flex-direction: column;

}
</style>