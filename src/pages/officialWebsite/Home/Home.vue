<template>
  <div class="home">
    <lab-nav/>
    <carousel/>
    <introduce/>
  </div>
</template>
<script>
  import labNav from "../../../components/labNav";
  import carousel from "./carousel";
  import introduce from "./introduce";
  export default {
    components: {labNav,carousel,introduce},
  }
</script>
<style scoped lang="less">
</style>
