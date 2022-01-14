<template>
  <div class="mainContainer">
    <SmallVideoDetail v-for="item in videoItems" :key="item.id" :videoItem="item"/>

  </div>
</template>

<script>
import SmallVideoDetail from "@/components/SmallVideoDetail";
import axios from "axios";

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

  async mounted() {
    //deconstract with javascript shorthand
    const {data} = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos");
     this.videoItems = data;
  }
}
</script>

<style scoped>
.mainContainer{

  display: flex;
  flex-direction: row;
  flex-grow: 4;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>