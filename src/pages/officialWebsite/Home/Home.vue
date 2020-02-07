<template>
  <div class="home">
    <lab-nav/>
    <carousel/>
    <introduce/>
    <research/>
    <awards/>
    <direction/>
    <contact/>
  </div>
</template>
<script>
  import labNav from "../../../components/labNav";
  import carousel from "./carousel";
  import introduce from "./introduce";
  import research from "./research";
  import awards from "./awards";
  import direction from "./direction";
  import contact from "../../../components/contact";
  export default {
    components: {labNav,carousel,introduce,research,awards,direction,contact},
  }
</script>
<style scoped lang="less">
</style>
