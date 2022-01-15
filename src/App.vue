<template>
  <div id="app" >
    <Header class="main"/>
    <div class="main">
<!--    when we use vue-router whe have to add router-view for display routed page -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header,
  },
  mounted() {
  this.$router.push("/main")
  }
}
</script>

<style>
#app{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main {
  display: flex;
  align-items: center;
 width: 1500px;

  margin: 50px 200px;
}
</style>
