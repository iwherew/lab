<template>
  <div class="department-group">
    <div class="department-item bg" v-for="(item, index) in departmentList" :key="index" :style="{'backgroundImage':'url('+item.imageUrl+')'}">
      <div class="wrap flex">
        <div class="inner-wrap flex">
          <div class="department-image bg"
               @mouseenter="changeActive($event)"
               @mouseleave="removeActive($event)"
               :style="{'backgroundImage':'url('+item.imageUrl+')'}"></div>
          <div class="content flex-c">
            <div class="name">{{item.name}}</div>
            <div class="underline"></div>
            <div class="introduce">{{item.introduce}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import department01 from "../../../images/officialWebsite/department/department01.jpg";
  import department02 from "../../../images/officialWebsite/department/department02.jpg";
  import department03 from "../../../images/officialWebsite/department/department03.jpg";
  import department04 from "../../../images/officialWebsite/department/department04.jpg";
  export default {
    data(){
      return{
        departmentList:[
          {
            id:1,
            name: '语音识别部',
            imageUrl: department01,
            introduce: `语音识别技术就是让机器通过识别和理解过程把语音信号转变为相应的文本或命令的高技术。　语音识别技术主要包括特征提取技术、模式匹配准则及模型训练技术三个方面。语音识别技术车联网也得到了充分的引用，例如在翼卡车联网中，只需按一键通客服人员口述即可设置目的地直接导航，安全、便捷。`
          },
          {
            id:2,
            name: '图像处理部',
            imageUrl: department02,
            introduce: `主要内容是图像经过某些预处理（增强、复原、压缩）后，进行图像分割和特征提取，从而进行判决分类。图像分类常采用经典的模式识别方法，有统计模式分类和句法（结构）模式分类，近年来新发展起来的模糊模式识别和人工神经网络模式分类在图像识别中也越来越受到重视。`
          },
          {
            id:3,
            name: '统计分析部',
            imageUrl: department03,
            introduce: `统计分析是指运用统计方法及与分析对象有关的知识，从定量与定性的结合上进行的研究活动。它是继统计设计、统计调查、统计整理之后的一项十分重要的工作，是在前几个阶段工作的基础上通过分析从而达到对研究对象更为深刻的认识。它又是在一定的选题下，集分析方案的设计、资料的搜集和整理而展开的研究活动。系统、完善的资料是统计分析的必要条件。`
          },
          {
            id:4,
            name: '算法部',
            imageUrl: department04,
            introduce: `基于海量数据，应用统计建模、数据挖掘、机器学习、深度学习等手段，设计基于各类场景的分析算法模型。持续开发和优化算法，推动算法实现和模型固化，以及异常检测、故障关联分析、报警聚合等环节的构建和落地，提升海量数据的处理性能，提高算法迭代速度。协同推动大数据平台的建设，提升数据的有效利用。`
          },
        ]
      }
    },
    methods: {
      changeActive($event) {
        $event.currentTarget.classList.add('active');
      },
      removeActive($event) {
        $event.currentTarget.classList.remove('active');
      },
    }
  }
</script>
<style scoped lang="less">
  .department-item{
    height: 700px;
    position: relative;
    &:after{
      content: "";
      width:100%;
      height:100%;
      position: absolute;
      left:0;
      top:0;
      background: inherit;
      filter: blur(5px);
      z-index: 2;
    }
    .wrap{
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      width:100%;
      height:100%;
      z-index:11;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,0.5);
    }
    .inner-wrap{
      width: 1300px;
      height:100%;
      justify-content: space-between;
      align-items: center;
    }
    .department-image{
      width: 550px;
      height: 400px;
      border-radius: 20px;
      transition: width 0.6s, height 0.6s, transform 0.6s;
      &.active{
        width: 600px;
        height: 436px;
        transition: width 0.3s, height 0.3s, transform 0.3s;

      }
    }
    .content{
      width: 520px;
      letter-spacing:2px;
      align-items: center;
      .name{
        color: #1296DB;
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 15px;
      }
      .underline{
        width: 60px;
        height: 4px;
        background: #F54785;
      }
      .introduce{
        margin-top: 40px;
        font-size: 20px;
        text-indent: 40px;
        line-height: 35px;
        color: #FFFFFF;
      }
    }
  }
</style>
