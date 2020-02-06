<template>
  <div class="research flex-c">
    <div class="header">研究成果</div>
    <div class="content flex">
      <div class="context-item flex-c" v-for="(item, index) in researchItems.slice(0,3)" :key="index">
        <div class="icon bg" :style="{'backgroundImage':'url('+icons[index]+')'}"></div>
        <div class="title">{{item.title}}</div>
        <div class="img bg" :style="{'backgroundImage':'url('+item.img+')'}"></div>
        <div class="context">{{item.context}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import icon01 from '../../../images/officialWebsite/home/researchIcon01.png'
  import icon02 from '../../../images/officialWebsite/home/researchIcon02.png'
  import icon03 from '../../../images/officialWebsite/home/researchIcon03.png'
  import research01 from '../../../images/officialWebsite/home/research01.jpg'
  import research02 from '../../../images/officialWebsite/home/research02.jpg'
  import research03 from '../../../images/officialWebsite/home/research03.jpg'
  export default {
    data(){
      return{
        icons:[icon01,icon02,icon03],
        researchItems:[
          {
            img: research01,
            title: '首次实现全光量子中继',
            context: '在国际上首次实验实现全光量子中继器的原理性验证，为构建远距离光纤量子网络开辟了新途径。该成果于近日在国际学术权威期刊《自然·光子学》上在线发表。'
          },
          {
            img: research02,
            title: '“松果结构”催化剂',
            context: '创新思路设计出一种“松果结构”的铂金属催化剂，在制氢效果不变的情况下将铂金属的用量降低到传统商业催化剂的约1/75。日前国际知名学术期刊《自然·能源》发表了该研究成果。'
          },
          {
            img:research03,
            title: '单层石墨烯纳米带',
            context: '通过含氟自由基切割单壁碳纳米管，在世界范围内首次制备出单层石墨烯纳米带。通过一步法获得单层石墨烯纳米带，其作为原电池正极材料能量密度较进口产品可提升30%。'
          },
          {
            img: research01,
            title: '首次实现全光量子中继',
            context: '在国际上首次实验实现全光量子中继器的原理性验证，为构建远距离光纤量子网络开辟了新途径。该成果于近日在国际学术权威期刊《自然·光子学》上在线发表。'
          },
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  .research{
    background: #F7F7F7;
    padding: 80px 0 100px;
    align-items: center;
  }
  .header{
    font-size: 40px;
    color: #F54785;
    font-weight: bold;
    margin-bottom: 80px;
  }
  .context{
    width: 100%;
  }
  .context-item{
    width: 407px;
    margin: 0 20px;
    align-items: center;
  }
  .icon{
    width: 90px;
    height: 90px;
  }
  .title{
    font-size: 26px;
    color: #F54785;
    margin: 30px 0;
  }
  .img{
    width: 407px;
    height: 270px;
  }
  .context{
    margin-top: 30px;
    font-size: 18px;
    line-height: 50px;
    color: #101010;
    text-indent: 38px;
  }
</style>
