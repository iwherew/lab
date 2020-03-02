<template>
  <div class="article">
    <banner/>
    <router-view/>
  </div>
</template>
<script>
  import banner from "../../../components/banner";
  export default {
    components: {banner},
  }
</script>
<style scoped lang="less">
</style>
