<template>
  <div class="header flex">
    <div class="header-left flex">
      <div class="logo bg"></div>
      <div class="school-name flex-c">
        <div class="school-name-cn">杭州电子科技大学</div>
        <div class="school-name-en">Hangzhou Dianzi University</div>
      </div>
      <div class="lab-name">计算机实验室</div>
    </div>
    <div class="header-right flex">
      <div class="nav">
        <el-menu :default-active="activeIndex"
                 mode="horizontal"
                 active-text-color="#F54785"
                 router
        >
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/notice">通知公告</el-menu-item>
          <el-menu-item index="/department">部门介绍</el-menu-item>
          <el-menu-item index="/member">成员介绍</el-menu-item>
          <el-menu-item index="/recruitment">招生信息</el-menu-item>
        </el-menu>
      </div>
      <div class="avatar no-avatar bg"></div>
    </div>
  </div>

</template>
<script>
  export default {
    computed:{
      activeIndex(){
        return this.$route.path
      }
    },
  }
</script>
<style scoped lang="less">
  .header{
    justify-content: space-between;
    .header-left{
      .logo{
        margin: 5px 25px;
        width: 60px;
        height: 60px;
        background-image: url("../images/officialWebsite/home/school-logo.png");
      }
      .school-name{
        color: #003B90;
        font-weight: bold;
        padding: 10px 10px 0;
        align-items: center;
      }
      .school-name-cn{
        font-size: 26px;
      }
      .school-name-en{
        margin-top: 5px;
        font-size: 12px;
      }
      .lab-name{
        padding-left: 20px;
        line-height: 70px;
        color: #F54785;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .avatar{
      margin: 10px 20px;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      &.no-avatar{
        background-image: url("../images/officialWebsite/home/yonghu.png");
      }
    }
  }
</style>
<style lang="less">
  .header{
    .el-menu.el-menu--horizontal{
      border-bottom: none;
    }
    .el-menu--horizontal>.el-menu-item{
      height: 70px;
      line-height: 70px;
    }
    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
      color: #F54785;
    }
  }
</style>
