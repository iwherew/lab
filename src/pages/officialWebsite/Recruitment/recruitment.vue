<template>
  <div class="recruitment">
    <banner/>
    <article-lists :type="recruitment"/>
  </div>
</template>
<script>
  import banner from '../../../components/banner'
  import articleLists from "../common/articleLists";
  import recruitmentImage from '../../../images/officialWebsite/recruitment/recruitment.jpg'
  export default {
    components: {banner,articleLists},
    data(){
      return{
        recruitment:{
          title: '招生信息',
          imageUrl: recruitmentImage,
        }
      }
    }
  }
</script>
<style scoped lang="less">
</style>
