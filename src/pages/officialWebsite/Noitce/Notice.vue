<template>
  <div class="home">
    <lab-nav/>
    <banner/>
    <notice-lists/>
    <contact/>
  </div>
</template>
<script>
  import labNav from "../../../components/labNav";
  import banner from '../../../components/banner'
  import contact from "../../../components/contact";
  import noticeLists from "./noticeLists";
  export default {
    components: {labNav,contact,banner,noticeLists},
  }
</script>
<style scoped lang="less">
</style>
