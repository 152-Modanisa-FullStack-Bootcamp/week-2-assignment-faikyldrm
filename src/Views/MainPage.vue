<template>
  <div class="mainContainer">
    <SmallVideoDetail v-for="item in videos" :key="item.id" :videoItem="item"/>

  </div>
</template>

<script>
import SmallVideoDetail from "@/components/SmallVideoDetail";
import axios from "axios";
import {mapState} from "vuex"
export default {
  name: "MainPage",
  components: {
    SmallVideoDetail
  },
  data() {
    return {
      videoItems: []
    }
  },
  computed:{
    ...mapState(["videos"])
  },

  async mounted() {
    //deconstract with javascript shorthand
    const {data} = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos");
    this.$store.state.videos = data;
  //  this.videoItems = data;
  }
}
</script>

<style scoped>
.mainContainer {

  display: flex;
  flex-direction: row;
  flex-grow: 4;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>