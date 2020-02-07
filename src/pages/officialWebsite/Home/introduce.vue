<template>
  <div class="introduces">
    <div class="introduce-item flex" v-for="(item, index) in introItems" :key="index">
      <div class="img bg" :style="{'backgroundImage':'url('+item.img+')'}"></div>
      <div class="context-box flex-c">
        <div class="title one-line">{{item.title}}</div>
        <div class="context four-lines">{{item.context}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import introduce01 from '../../../images/officialWebsite/home/introduce01.jpg'
  export default {
    data(){
      return{
        introItems:[
          {
            img: introduce01,
            title: '超大规模并行深度学习平台',
            context:  '同时支持稠密参数和稀疏参数场景的超大规模深度学习并行训练，支持千亿规模参数、数百个节点的高效并行训练，提供强大的深度学习并行技术'
          },
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  .introduces{
    width: 100%;
  }
  .introduce-item{
    width: 100%;
    height: 600px;
    background: #FFFFFF;
  }
  .img{
    width: 50%;
    height: 600px;
  }
  .context-box{
    width: 50%;
    padding-top: 100px;
    align-items: center;
  }
  .title{
    width: 650px;
    margin-top: 100px;
    margin-bottom: 50px;
    text-align: center;
    font-size: 40px;
    color: #F54785;
    font-weight: bold;
  }
  .context{
    width: 580px;
    margin-bottom: 50px;
    font-size: 20px;
    color: #101010;
    line-height: 40px;
  }
</style>
