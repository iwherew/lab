<template>
  <div class="team flex-c bg">
    <div class="title">团队成员</div>
    <div class="member-group flex">
      <div class="member-item bg"
           v-for="(item, index) in members"
           :key="index"
           :style="{'backgroundImage':'url('+item.photo+')'}"
           @mouseenter="changeActive($event)"
           @mouseleave="removeActive($event)"
      >
        <div class="black flex-c">
          <div class="name">{{item.name}}</div>
          <div class="intro">{{item.intro}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import team01 from '../../../images/officialWebsite/member/team01.jpg'
  import team02 from '../../../images/officialWebsite/member/team02.jpg'
  import team03 from '../../../images/officialWebsite/member/team03.jpg'
  import team04 from '../../../images/officialWebsite/member/team04.jpg'
  import team05 from '../../../images/officialWebsite/member/team05.jpg'
  import team06 from '../../../images/officialWebsite/member/team06.jpg'
  import team07 from '../../../images/officialWebsite/member/team07.jpg'
  export default {
    data(){
      return{
        members:[
          {
            name: `习近平`,
            intro: `中国共产党中央委员会总书记，中共中央军事委员会主席，中华人民共和国主席，中华人民共和国中央军事委员会主席。`,
            photo: team01
          },
          {
            name: `李克强`,
            intro: `现任中共十九届中央政治局常委，国务院总理、党组书记。`,
            photo: team02
          },
          {
            name: `栗战书`,
            intro: `现任中共十九届中央政治局常委，十三届全国人大常委会委员长、党组书记。`,
            photo: team03,
          },
          {
            name: `汪洋`,
            intro: `现任中共十九届中央政治局常委，十三届全国政协主席。`,
            photo: team04,
          },
          {
            name: `王沪宁`,
            intro: `现任中央政治局常委、中央书记处书记，中央政策研究室主任，中央全面深化改革领导小组办公室主任，中央文明委主任。`,
            photo: team05,
          },
          {
            name: `赵乐际`,
            intro: `现任中央政治局常委，中央纪律检查委员会书记。`,
            photo: team06,
          },
          {
            name: `韩正`,
            intro: `现任中共十九届中央政治局常委，国务院副总理、党组副书记。`,
            photo: team07,
          },
        ]
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
  .team{
    width: 100%;
    background-image: url("../../../images/officialWebsite/notice/background01.jpg");
    align-items: center;
  }
  .title{
    margin: 70px 0 30px;
    color: #003B90;
    font-size: 30px;
    padding-bottom: 20px;
    border-bottom: 5px solid #F54785;
    font-weight: bold;
  }
  .member-group{
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
  .member-item{
    width: 230px;
    height: 300px;
    border-radius: 20px;
    margin: 60px;
    .black{
      visibility: hidden;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background: rgba(0,0,0,0.5);
      align-items: center;
      color: #FFFFFF;
      .name{
        height: 60px;
        font-size: 28px;
        margin-top: 50px;
        font-weight: bold;
      }
      .intro{
        height: 150px;
        font-size: 18px;
        padding: 0 20px;
        line-height: 25px;
        overflow: hidden;  //隐藏多余行数
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6; //规定显示几行，其余行数用小数点代替
        -webkit-box-orient: vertical;  //规定为垂直方向排列
      }
    }
    &.active .black{
      visibility: visible;
    }
  }
</style>
