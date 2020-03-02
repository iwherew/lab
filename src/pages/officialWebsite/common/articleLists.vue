<template>
  <div class="wrap flex-c notice-lists bg">
    <div class="header">{{type.title}}</div>
    <div class="content flex" :style="{'flexDirection':flexDirection}">
      <div class="content-left bg" :style="{'backgroundImage':'url('+type.imageUrl+')'}"></div>
      <div class="content-right flex-c">
        <div class="btn-group flex">
          <div class="black"></div>
          <div class="circle-group flex">
            <div class="circle"
                 @mouseenter="changeActive($event)"
                 @mouseleave="removeActive($event)"
                 @click="goToNoticeEdit"
            >
              <div class="icon bg add"></div>
            </div>

            <div class="circle"
                 @mouseenter="changeActive($event)"
                 @mouseleave="removeActive($event)"
                 @click="changeShowSelect"
            >
              <div class="icon bg classify"></div>
            </div>
            <el-select
              v-model="departmentSelected"
              placeholder="筛选部门信息"
              size="small"
              v-show="showSelect"
            >
              <el-option
                v-for="(item, index) in departmentList"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
            <div class="circle"
                 @mouseenter="changeActive($event)"
                 @mouseleave="removeActive($event)"
                 @click="changeSearch"
            >
              <div class="icon bg search"></div>
            </div>
            <el-autocomplete
              v-show="showSearch"
              v-model="search"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入搜索内容"
              @select="handleSelect"
              size="small"
            ></el-autocomplete>
          </div>

        </div>
        <div class="notice-group flex-c">
          <div class="notice-item flex"
               v-for="(item, index) in noticeList"
               :key="index"
               @mouseenter="changeActive($event)"
               @mouseleave="removeActive($event)"
               @click="goToDetail(item.id)"
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
  import schoolImage from '../../../images/officialWebsite/notice/school.jpg'
  export default {
    props:{
      type: {
        type: Object,
        default: ()=>{
          return{
            title: '通知公告',
            imageUrl: schoolImage,
          }
        },
      },
      flexDirection:{
        type: String,
        default:'row'
      }
    },
    data(){
      return{
        noticeList:[
          {
            id: 118,
            title: '学术报告：THz for Smart and Safe Future: a special focus on Towards Tbit THz wireless communications',
            time: 1581178630478
          },
          {
            id: 117,
            title: '讲座：脑机接口在康复与辅助系统中的应用',
            time: 1581005604000
          },
          {
            id: 116,
            title: '学术讲座：统计方法前沿研究',
            time: 1581005604000
          },
          {
            id: 115,
            title: '院士讲座：创新是科学的灵魂',
            time: 1580919204000
          },
          {
            id: 114,
            title: '高雅艺术进校园——中国爱乐乐团来校演出',
            time: 1580919204000
          },
          {
            id: 113,
            title: '学术交流与科研评价的现状与挑战',
            time: 1580919204000
          },
          {
            id: 112,
            title: '召开新时代网络意识形态安全与高校思想政治教育学术研讨会',
            time: 1580832804000
          },
          {
            id: 111,
            title: '新冠病毒潜在中间宿主或为穿山甲',
            time: 1580832804000
          },
        ],
        departmentList:[
          '全部',
          '语音识别部',
          '图像处理部',
          '统计分析部',
          '算法部',
        ],
        departmentSelected: '',
        showSelect: false,
        search:'',
        timeout:  null,
        searchList: [],
        showSearch: false
      }
    },
    methods:{
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      transformTime,
      changeActive($event) {
        $event.currentTarget.classList.add('active');
      },
      removeActive($event) {
        $event.currentTarget.classList.remove('active');
      },
      changeShowSelect(){
        this.showSelect = !this.showSelect
      },
      changeSearch(){
        this.showSearch = !this.showSearch
      },
      handleSelect(item) {
        console.log(item);
      },
      createStateFilter(queryString) {
        return (item) => {
          return (item.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1);
        };
      },
      querySearchAsync(queryString, cb){
        let searchList = this.searchList;
        let results = queryString ? searchList.filter(this.createStateFilter(queryString)) : [];
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 2000);
      },
      goToDetail(id){
        let routeData = this.$router.resolve({ path: '/article/articleDetail' ,query:{id:id}});
        window.open(routeData.href, '_blank');
      },
      goToNoticeEdit(){
        this.$router.push('/article/articleEdit')
      }
    },
    mounted() {
      this.searchList = this.loadAll();
    }
  }
</script>
<style scoped lang="less">
  .wrap{
    width: 100%;
    padding: 70px 0;
    align-items: center;
    background-image: url("../../../images/officialWebsite/notice/background01.jpg");
    .header{
      font-size: 30px;
      color: #003B90;
      font-weight: bold;
      border-bottom: 5px solid #F54785;
      padding-bottom: 20px;
      margin-bottom: 85px;
    }
    .content{
      width: 1300px;
      justify-content: space-around;
      .content-left{
        width: 555px;
        height: 430px;
        border-radius: 20px;
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
        margin-left: 10px;
        margin-right: 5px;
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
            .title, .time{
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>
<style lang="less">
  .notice-lists{
    .el-pagination.is-background .el-pager li{
      background-color: #FFFFFF;
    }
  }
</style>
