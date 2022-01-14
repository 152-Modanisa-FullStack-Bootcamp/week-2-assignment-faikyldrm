<template>

  <div class="SmallVideoDetailContainer">
    <img :src="hoverImageStat" @mouseover="hover = true" @mouseleave="hover = false" class="video"
         @click="navigateToVideo"/>
    <div class="subBox">
      <div class="contentBox">
        <div class="ownerDiv">
          <img :src="videoItem.ownerImage" class="ownerImage"/>
        </div>
        <div class="infoBox">
          <span class="video-title">{{ videoItem.title }}</span>
          <span class="video-owner">{{ videoItem.ownerName }}</span>
          <div class="publishInfoBox">
            <span class="viewed-count">{{ viewCount }}</span>
            <span class="published-date">{{ publishInMonth }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    videoItem: Object
  },
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    navigateToVideo() {
      //router.push make the rediction
      this.$router.push({path: 'watch', query: {id: this.videoItem.id}})

    }
  },
  computed: {
    viewCount() {
      return this.videoItem.viewCount + " Views   •  ";
    },
    hoverImageStat() {
      // This is one way to make mouseover  actualy I don't know other way
      if (this.hover)
        return this.videoItem.hoverImage;
      else
        return this.videoItem.coverImage;
    },
    publishInMonth() {
      if (this.videoItem.publishDateInMonth >= 12)
        return Math.floor(this.videoItem.publishDateInMonth / 12) + " Year"
      else
        return this.videoItem.publishDateInMonth + " Month"

    },


  }
}
</script>

<style scoped>

.SmallVideoDetailContainer {
  font-family: "Roboto Light", "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  width: 360px;

}

.video {
  height: 200px;
  width: 360px;
  padding-bottom: 5px;
}

.ownerDiv {
  margin-top: 12px;
  margin-right: 12px;
}

.ownerImage {
  height: 36px;
  width: 36px;
  padding: 5px;

}

.contentBox {
  display: flex;
  flex-direction: row;
}

.infoBox {
  display: flex;
  flex-direction: column;
  line-height: 1.3rem;

}

.publishInfoBox {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-overflow: ellipsis;

}

.video-title {
  max-width: 100%;
}

.video-owner {
  font-size: 0.92rem;
}

.subBox {
  width: 100%;
  font-size: 0.92rem;
}

</style>