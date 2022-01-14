<template>
  <div class="mainContainer">
    <div>
    <img :src="hoverImageStat()" @mouseover="hover = true" @mouseleave="hover = false"  class="video" @click="navigateToVideo"/>
    </div>
    <div class="contentContainer">
      <div class="infoBox">
        <span class="video-title">{{ vItem.title }}</span>
        <div class="publishInfoBox">
          <span class="viewed-count">{{viewCount() }}</span>
          <span class="published-date">{{ publishInMonth() }}</span>
        </div>
        <div class="ownerDiv">
          <img :src="vItem.ownerImage" class="ownerImage"/>
          <span class="video-owner">{{ vItem.ownerName }}</span>
        </div>
        <div class="descriptionContainer">
          <span>{{ vItem.description }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "FavDetail",
  props: {
    vItem: Object
  },
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    navigateToVideo() {
      //router.push make the rediction
      this.$router.push({path: `/watch` ,query:{id:this.vItem.id}})

    },
    viewCount() {
      return this.vItem.viewCount + " Views   •";
    },
    publishInMonth() {
      if (this.vItem.publishDateInMonth >= 12)
        return Math.floor(this.vItem.publishDateInMonth / 12) + " Year"
      else
        return this.vItem.publishDateInMonth + " Month"

    },
    hoverImageStat() {
      if (this.hover)
        return this.vItem.hoverImage;
      else
        return this.vItem.coverImage;
    },


  }
}
</script>

<style scoped>
.mainContainer {
  font-family: "Roboto Light", "Arial", sans-serif;
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 20px;
  line-height: 3rem;

}

.contentContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;

}

.video {
  height: 200px;
  width: 360px;
  padding-bottom: 5px;
}

.infoBox {
  display: flex;
  flex-direction: column;
  word-wrap: break-word;

}

.video-title {
  font-size: 1.8rem;
  max-height: 5.2rem;

}

.publishInfoBox {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-overflow: ellipsis;
  font-size: 1.2rem;

}

.viewed-count {
  display: inline-block;
}
.published-date{
  margin-left: 5px;
}

.ownerDiv {
  display: flex;
  flex-direction: row;
  align-items: center;

}

.ownerImage {
  width: 24px;
  height: 24px;
}

.video-owner {
 font-size: 0.8rem;
 margin-left: 5px;
}

.descriptionContainer {
  overflow: hidden;
  white-space: nowrap;

  max-width: 1000px;
  text-overflow: ellipsis;

}
</style>