<template>
<div class="headerContainer">
  <button id="favorites" @click="navigateToFavorites">Favorites</button>
</div>
</template>

<script>
export default {
  name: "Header",
data(){
    return{
      userId:"bootcamp"
    }
},
  methods:{
    navigateToFavorites(){
      //router.push make the rediction
      this.$router.push({ path: `/favorites/${this.userId}` })

    }
  }
}
</script>

<style scoped>
.headerContainer{
  display: flex;
  align-items: center;
  justify-content: flex-end;

}
#favorites{
  margin-right: 10px;
  height: 50px;
}
</style>