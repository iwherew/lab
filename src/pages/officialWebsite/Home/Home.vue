<template>
  <div class="home">
    <lab-nav/>
    <carousel/>
    <introduce/>
    <research/>
  </div>
</template>
<script>
  import labNav from "../../../components/labNav";
  import carousel from "./carousel";
  import introduce from "./introduce";
  import research from "./research";
  export default {
    components: {labNav,carousel,introduce,research},
  }
</script>
<style scoped lang="less">
</style>
