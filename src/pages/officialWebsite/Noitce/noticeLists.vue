<template>
  <div class="wrap flex-c">
    <div class="header">通知公告</div>
    <div class="content flex">
      <div class="content-left bg"></div>
      <div class="content-right flex-c">
        <div class="btn-group flex">
          <div class="black"></div>
          <div class="circle-group flex">
            <div class="circle"
                 @mouseenter="changeActive($event)"
                 @mouseleave="removeActive($event)"
            >
              <div class="icon bg add"></div>
            </div>
            <div class="circle"
                 @mouseenter="changeActive($event)"
                 @mouseleave="removeActive($event)"
            >
              <div class="icon bg classify"></div>
            </div>
            <div class="circle"
                 @mouseenter="changeActive($event)"
                 @mouseleave="removeActive($event)"
            >
              <div class="icon bg search"></div>
            </div>
          </div>

        </div>
        <div class="notice-group flex-c">
          <div class="notice-item flex"
               v-for="(item, index) in noticeList"
               :key="index"
               @mouseenter="changeActive($event)"
               @mouseleave="removeActive($event)"
          >
            <div class="square"></div>
            <div class="title one-line">{{item.title}}</div>
            <div class="time">{{transformTime(item.time)}}</div>
          </div>
        </div>
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :total="500">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import {transformTime} from '../../../utils/func'
  export default {
    data(){
      return{
        noticeList:[
          {
            title: '学术报告：THz for Smart and Safe Future: a special focus on Towards Tbit THz wireless communications',
            time: 1581178630478
          },
          {
            title: '讲座：脑机接口在康复与辅助系统中的应用',
            time: 1581005604000
          },
          {
            title: '学术讲座：统计方法前沿研究',
            time: 1581005604000
          },
          {
            title: '院士讲座：创新是科学的灵魂',
            time: 1580919204000
          },
          {
            title: '高雅艺术进校园——中国爱乐乐团来校演出',
            time: 1580919204000
          },
          {
            title: '学术交流与科研评价的现状与挑战',
            time: 1580919204000
          },
          {
            title: '召开新时代网络意识形态安全与高校思想政治教育学术研讨会',
            time: 1580832804000
          },
          {
            title: '新冠病毒潜在中间宿主或为穿山甲',
            time: 1580832804000
          },
        ]
      }
    },
    methods:{
      transformTime,
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
  .wrap{
    width: 100%;
    padding: 70px 0;
    align-items: center;
    background: #F7F7F7;
    .header{
      font-size: 30px;
      color: #003B90;
      font-weight: bold;
      border-bottom: 5px solid #F54785;
      padding-bottom: 20px;
      margin-bottom: 70px;
    }
    .content{
      width: 1300px;
      justify-content: space-around;
      .content-left{
        width: 555px;
        height: 430px;
        border-radius: 20px;
        background-image: url("../../../images/officialWebsite/notice/school.jpg");
      }
      .content-right{
        width: 600px;
        letter-spacing:0;
      }
      .btn-group{
        margin-top: -45px;
        margin-bottom: 15px;
        width: 100%;
        justify-content: space-between;
        .circle-group{
        }
      }
      .circle{
        width: 30px;
        height: 30px;
        border: 1px solid #BBBBBB;
        border-radius: 50%;
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
        .icon{
          width: 18px;
          height: 18px;
          &.add{
            background-image: url("../../../images/officialWebsite/notice/add.png");
          }
          &.classify{
            background-image: url("../../../images/officialWebsite/notice/classify.png");
          }
          &.search{
            background-image: url("../../../images/officialWebsite/notice/search.png");
          }

        }
        &.active{
          border: 1px solid #F54785;
          .add{
            background-image: url("../../../images/officialWebsite/notice/add-acitve.png");
          }
          .classify{
            background-image: url("../../../images/officialWebsite/notice/classify-active.png");
          }
          .search{
            background-image: url("../../../images/officialWebsite/notice/search-active.png");
          }
        }
      }
      .notice-group{
        height: 420px;
        width: 100%;
        margin-bottom: 30px;
        .notice-item{
          height: 45px;
          width: 100%;
          margin: 3px 0;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          .square{
            height: 15px;
            width: 15px;
            background: #00D2D4;
          }
          .title{
            width: 400px;
            font-size: 16px;
            color: #101010;
          }
          .time{
            font-size: 16px;
            color: #101010;
          }
          &.active{
            background: #ECECEC;
            .square{
              background: #F54785;
            }
          }
        }
      }
    }
  }
</style>
