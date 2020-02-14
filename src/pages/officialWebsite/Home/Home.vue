<template>
  <div class="home">
    <carousel/>
    <introduce/>
    <research/>
    <awards/>
    <direction/>
  </div>
</template>
<script>
  import carousel from "./carousel";
  import introduce from "./introduce";
  import research from "./research";
  import awards from "./awards";
  import direction from "./direction";
  export default {
    components: {carousel,introduce,research,awards,direction},
  }
</script>
<style scoped lang="less">
</style>
