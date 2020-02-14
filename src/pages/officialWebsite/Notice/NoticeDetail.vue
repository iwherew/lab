<template>
  <div class="notice-detail">这是ID {{ $route.query.id }}</div>
</template>
<script>
  import banner from '../../../components/banner'
  export default {
    components: {banner},
    mounted() {
      console.log(this.$route.query.id)
    }
  }
</script>
<style scoped lang="less">
</style>
