<template>
  <div class="contact bg">
    <div class="black flex-c">
      <div class="header">联系我们</div>
      <div class="contact-group flex">
        <div class="contact-item flex-c" v-for="(item, index) in contactItems" :key="index">
          <div class="icon-wraper flex">
            <div class="icon bg" :style="{'backgroundImage':'url('+item.icon+')'}"></div>
          </div>
          <div class="text">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import address from '../images/officialWebsite/home/address.png'
  import email from '../images/officialWebsite/home/email.png'
  import phone from '../images/officialWebsite/home/phone.png'
  export default {
    data(){
      return{
        contactItems:[
          {
            icon: address,
            text: '杭州市杭州经济技术开发区白杨街道2号大街1158号'
          },
          {
            icon: email,
            text: 'iwhere_w@126.com'
          },
          {
            icon: phone,
            text: '16655551111'
          },
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  .contact{
    width: 100%;
    height: 350px;
    background-image: url("../images/officialWebsite/home/contact.jpg");
  }
  .black{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.67);
    align-items: center;
    justify-content: space-around;
  }
  .header{
    font-size: 24px;
    color: #F54785;
    font-weight: bold;
    border-bottom: 3px solid #FFFFFF;
    padding-bottom: 15px;
  }
  .contact-group{
    justify-content: space-around;
    align-items: center;
  }
  .contact-item{
    height: 180px;
    align-items: center;
    margin: 0 50px;
  }
  .icon-wraper{
    width: 65px;
    height: 65px;
    margin-bottom: 35px;
    border: 2px solid #FFFFFF;
    justify-content: center;
    align-items: center;
  }
  .icon{
    width: 40px;
    height: 40px;
  }
  .text{
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    width: 230px;
    line-height: 30px;
    text-align: center;
  }
</style>
