<template>
  <div class="home">
    <banner/>
    <article-lists/>
  </div>
</template>
<script>
  import banner from '../../../components/banner'
  import articleLists from "../common/articleLists";
  export default {
    components: {banner,articleLists},
  }
</script>
<style scoped lang="less">
</style>
