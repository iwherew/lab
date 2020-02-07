<template>
  <div class="home">
    <lab-nav/>
    <carousel/>
    <introduce/>
    <research/>
    <awards/>
  </div>
</template>
<script>
  import labNav from "../../../components/labNav";
  import carousel from "./carousel";
  import introduce from "./introduce";
  import research from "./research";
  import awards from "./awards";
  export default {
    components: {labNav,carousel,introduce,research,awards},
  }
</script>
<style scoped lang="less">
</style>
