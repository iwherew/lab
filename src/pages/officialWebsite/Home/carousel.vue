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
  import carousel01 from '../../../images/officialWebsite/home/carousel01.jpg'
  import carousel02 from '../../../images/officialWebsite/home/carousel02.jpg'
  import carousel03 from '../../../images/officialWebsite/home/carousel03.jpg'
  export default {
    data(){
      return{
        carouselItems:[
          {
            img: carousel01,
            title: '开放的实验平台',
            context: '教师和学生可以在任何时间，通过教室、实验室或其他地方的互联网接入点都能进行实验'
          },
          {
            img: carousel02,
            title: '不开放的实验平台不开放的实验平台不开放的实验平台',
            context: '在html中可以通过设置CSS中的line-height属性来改变行间距,可以给line-height设置的值可以是数字,像素大小或者是百分比,但是不可以设置成负值,line-height的值表示的是两行文字之间基线的距离。'
          },
          {
            img: carousel03,
            title: '这是标题',
            context: '这是内容'
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
