<template>
<!-- we get the query parameters from route object with parameter name  -->
<span>{{this.$route.query.id}}</span>
</template>

<script>
export default {
  name: "WatchPage"
}
</script>

<style scoped>

</style>