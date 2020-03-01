<template>
  <div class="member">
    <banner/>
    <team/>
    <article-lists :type="achievement"/>
    <article-lists :type="awards" :flexDirection="'row-reverse'"/>
  </div>
</template>
<script>
  import banner from '../../../components/banner'
  import team from "./team";
  import articleLists from "../common/articleLists";
  import achievementImage from '../../../images/officialWebsite/member/achievement.jpg'
  import awardsImage from '../../../images/officialWebsite/member/awards.png'
  export default {
    components: {banner,team,articleLists},
    data(){
      return{
        achievement:{
          title: '研究成果',
          imageUrl: achievementImage,
        },
        awards: {
          title: '荣誉奖项',
          imageUrl: awardsImage,
        }
      }
    }
  }
</script>
<style scoped lang="less">
</style>
