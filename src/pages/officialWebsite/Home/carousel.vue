<template>
<!-- 首页轮播 -->
  <div class="block">
    <el-carousel height="590px" :interval='5000'>
      <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
        <div class="bg carousel-item flex-c" :style="{'backgroundImage': 'url('+item.img+')'}">
          <div class="inner-box">
            <div class="title one-line">{{item.title}}</div>
            <div class="context four-lines">{{item.context}}</div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  import carousel05 from '../../../images/officialWebsite/home/carousel05.jpg'
  import carousel06 from '../../../images/officialWebsite/home/carousel06.jpg'
  import carousel07 from '../../../images/officialWebsite/home/carousel07.jpg'
  export default {
    data(){
      return{
        carouselItems:[
          {
            img: carousel05,
            title: '开放的实验平台',
            context: '教师和学生可以在任何时间，通过教室、实验室或其他地方的互联网接入点都能进行实验'
          },
          {
            img: carousel06,
            title: '领先的信息存储团队',
            context: '研究新一代磁、光、电存储技术，光致磁变记录新原理，大数据长效存储系统，新型存储器控制器关键算法'
          },
          {
            img: carousel07,
            title: '安全的传输系统',
            context: '解决大量移动智能终端和大尺度卫星链路的网络信息传输易被窃听、篡改和假冒的问题。'
          },
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  .carousel-item{
    height: 100%;
    width: 100%;
    justify-content: center;
  }
  .inner-box{
    width: 720px;
    height: 365px;
    background: rgba(0,0,0,0.45);
  }
  .title{
    font-size: 36px;
    color: #00D2D4;
    margin: 65px 100px 30px 180px;
    font-weight: bold;
  }
  .context{
    font-size: 24px;
    color: #FFFFFF;
    margin: 0 100px 30px 180px;
    line-height:40px;
  }
</style>
