<template>
  <div class="bg bg-img">
    <div class="black flex-c">
      <div class="header">荣誉奖项</div>
      <div class="subtitle">我们的付出终会被认可</div>
      <div class="awards-item flex" v-for="(item, index) in awards.slice(0,3)" :key="index">
        <div class="icon-bg">
          <div class="icon bg" :style="{'backgroundImage':'url('+icons[index]+')'}"></div>
        </div>
        <div class="award">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import icon01 from '../../../images/officialWebsite/home/awardsIcon01.png'
  import icon02 from '../../../images/officialWebsite/home/awardsIcon02.png'
  import icon03 from '../../../images/officialWebsite/home/awardsIcon03.png'
  export default {
    data(){
      return{
        icons: [icon01,icon02,icon03],
        awards: ['国家重点实验室','2018-2019年度科技系统先进集体','“五好”导学团队']
      }
    }
  }
</script>
<style scoped lang="less">
  .bg-img{
    width: 100%;
    height: 650px;
    background-image: url("../../../images/officialWebsite/home/awardsBackground.jpg");
  }
  .black{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .header{
    margin-top: 50px;
    font-weight: bold;
    font-size: 40px;
    color: #00D2D4;
    margin-left: 120px;
  }
  .subtitle{
    font-weight: bold;
    font-size: 26px;
    color: #FFFFFF;
    margin: 40px 120px;
  }
  .awards-item{
    margin: 20px 0;
    align-items: center;
  }
  .icon-bg{
    width: 70px;
    height: 70px;
    background: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #BBBBBB;
    margin-left: 120px;
  }
  .icon{
    width: 50px;
    height: 50px;
    margin: 10px;
  }
  .award{
    font-weight: bold;
    font-size: 24px;
    color: #FFFFFF;
    margin-left: 50px;
  }
</style>
