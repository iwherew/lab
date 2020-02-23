<template>
  <div class="department">
    <banner/>
    <department-item/>
  </div>
</template>
<script>
  import banner from '../../../components/banner'
  import departmentItem from "./departmentItem";
  export default {
    components: {banner,departmentItem},
  }
</script>
<style scoped lang="less">
</style>
