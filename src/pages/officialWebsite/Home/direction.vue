<template>
  <div class="direction flex-c">
    <div class="header">研究方向</div>
    <div class="content flex">
      <div class="direction-item flex"
           v-for="(item, index) in directions"
           :key="index"
           @mouseenter="changeActive($event)"
           @mouseleave="removeActive($event)"
      >
        <div class="img-bg bg" :style="{'backgroundImage':'url('+item.bg+')'}">
          <div class="black"></div>
        </div>
        <div class="circle flex">
          <div class="icon bg" :style="{'backgroundImage':'url('+item.icon+')'}"></div>
        </div>
        <div class="text">
          <div class="title one-line">{{item.title}}</div>
          <div class="context three-lines">{{item.context}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import icon01 from '../../../images/officialWebsite/home/directionIcon01.png'
  import icon02 from '../../../images/officialWebsite/home/directionIcon02.png'
  import icon03 from '../../../images/officialWebsite/home/directionIcon03.png'
  import icon04 from '../../../images/officialWebsite/home/directionIcon04.png'
  import direction01 from '../../../images/officialWebsite/home/direction01.jpg'
  import direction02 from '../../../images/officialWebsite/home/direction02.jpg'
  import direction03 from '../../../images/officialWebsite/home/direction03.jpg'
  import direction04 from '../../../images/officialWebsite/home/direction04.png'
  export default {
    data(){
      return{
        directions: [
          {
            icon: icon01,
            bg: direction01,
            title: '语音识别',
            context: '前馈型序列记忆网络的语音识别系统，该系统使用大量的卷积层直接对整句语音信号进行建模，更好的表达了语音的长时相关性。'
          },
          {
            icon: icon02,
            bg: direction02,
            title: '图像处理',
            context: '借助海量的同类数据或相似数据训练一个神经网络，然后让神经网络获得对图像内容进行理解、判断和预测的功能。'
          },
          {
            icon: icon03,
            bg: direction03,
            title: '自然语言处理',
            context: '通过添加隐藏层的多次递归，提高语言模型的性能，语音识别任务中，提高后续词预测准确率及降低总体识别错误率。'
          },
          {
            icon: icon04,
            bg: direction04,
            title: '数据挖掘',
            context: '从海量数据中挖掘隐藏信息，获取隐含的、规律性的、人们事先未知的、但又是潜在有用的并且最终可理解的信息和知识。'
          },
        ],
      }
    },
    methods:{
      changeActive($event) {
        $event.currentTarget.classList.add('active');
      },
      removeActive($event) {
        $event.currentTarget.classList.remove('active');
      }
    }
  }
</script>
<style scoped lang="less">
  .direction{
    padding: 80px 0;
    align-items: center;
  }
  .header{
    font-size: 40px;
    color: #F54785;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .content{
    max-width: 1300px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .direction-item{
    width: 620px;
    height: 270px;
    position: relative;
    align-items: center;
    justify-content: center;
  }
  .img-bg{
    display: none;
    z-index: -1;
  }
  .circle{
    width: 110px;
    height: 110px;
    border: 5px solid #BBBBBB;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
  }
  .icon{
    width: 75px;
    height: 70px;
  }
  .text{
    width: 415px;
    height: 230px;
    padding-left: 40px;
    padding-top: 40px;
    .title{
      font-size: 28px;
      font-weight: bold;
      padding-left: 36px;
      color: #00D2D4;
      padding-bottom: 20px;
    }
    .context{
      font-size: 18px;
      color: #101010;
      line-height: 40px;
      text-indent: 36px;
    }
  }
  .active {
    .img-bg {
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 100%;
      .black{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
      }
    }
    .circle{
      border: 5px solid #F54785;
    }
    .title{
      color: #F54785;
    }
    .context{
      color: #FFFFFF;
    }
  }
</style>
