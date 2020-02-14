<template>
  <div class="home">
    <lab-nav/>
    <router-view/>
    <contact/>
  </div>
</template>
<script>
  import labNav from "../../../components/labNav";
  import contact from "../../../components/contact";
  export default {
    components: {labNav,contact},
  }
</script>
<style scoped lang="less">
</style>
