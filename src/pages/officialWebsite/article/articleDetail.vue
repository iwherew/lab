<template>
  <div class="notice-detail bg flex">
    <div class="wrap flex">
      <div class="content flex-c">
        <div class="title">{{context.title}}</div>
        <div class="context-info flex">
          <div class="context-info-item">作者：{{context.author}}</div>
          <div class="context-info-item">上传时间：{{transformTime(context.createTime)}}</div>
          <div class="context-info-item">点击量：{{context.visitorVolume}}</div>
          <div class="context-info-item flex collect"
               @mouseenter="changeHover($event)"
               @mouseleave="removeHover($event)">
            <div class="icon bg"></div>
            <span>收藏</span>
          </div>
          <div class="context-info-item flex edit"
               @mouseenter="changeHover($event)"
               @mouseleave="removeHover($event)"
               @click="goToEdit"
          >
            <div class="icon bg"></div>
            <span>编辑</span>
          </div>
          <div class="context-info-item flex delete"
               @mouseenter="changeHover($event)"
               @mouseleave="removeHover($event)"
               @click="dialogVisible = true"
          >
            <div class="icon bg"></div>
            <span>删除</span>
          </div>
        </div>
        <div class="divider"></div>
        <div class="text" v-html="context.detail"></div>
        <div class="divider"></div>
        <div class="file-group">
          <div class="file-item flex" v-for="(item, index) in context.fileList" :key="index">
            <div class="file-icon bg"></div>
            <div class="file-name">{{item.name}}</div>
          </div>
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
        </div>
      </div>
    </div>
    <el-dialog
      title="确 认"
      :visible.sync="dialogVisible"
      width="20%"
      center>
      <div class="dialog-text">确认删除吗？</div>
      <span slot="footer" class="dialog-footer">
              <el-button size="small" @click="dialogVisible = false">取 消</el-button>
              <el-button size="small" type="danger" @click="dialogVisible = false">删 除</el-button>
            </span>
    </el-dialog>
  </div>
</template>
<script>
  import banner from '../../../components/banner'
  import {transformTime} from '../../../utils/func'

  export default {
    components: {banner},
    data() {
      return {
        context: {
          id: 112,
          title: '召开新时代网络意识形态安全与高校思想政治教育学术研讨会',
          author: '风清扬',
          createTime: 1580832804000,
          visitorVolume: 233,
          detail: `<p>&nbsp;&nbsp;&nbsp;&nbsp;2018年11月10日，由我校马克思主义学院与《思想政治教育研究》杂志联合主办的“新时代网络意识形态安全与高校思想政治教育”学术研讨会在杭州电子科技大学科技馆扇形会议室顺利召开，我校副校长吕金海和《思想政治教育研究》杂志执行副主编刘迪分别致辞。来自中国石油大学、湖南师范大学、重庆邮电大学、桂林电子科技大学、中央民族大学、中南财经政法大学、广西师范大学、同济大学、南京师范大学等国内30多所高校的60多位学者，以及我校发展规划处、网络空间安全学院、材料与环境工程学院的有关领导，马克思主义学院的老师和研究生同学出席了本次会议。会议开幕式由我校马克思主义学院院长王海稳主持。</p><p>&nbsp; &nbsp; 开幕式后，王海稳院长主持了上午的专题报告会议。湖南师范大学马克思主义学院院长吴家庆、重庆邮电大学马克思主义学院院长代金平、华中师范大学马克思主义学院教授郭明飞等学者们分别以“维护党的‘领导核心’的制度思考”、“习近平的网络安全治理思想”、“当前高校网络意识形态安全风险及其防控”为题，立足于新时代网络意识形态安全与高校思想政治教育面临的新境遇，从不同的领域和视角，作了非常有见地、有思想的主旨发言。</p><p>&nbsp;&nbsp;&nbsp; 下午的分组讨论，按照“新时代网络意识形态安全研究”、“新时代网络与高校学生事务管理”、“习近平新时代中国特色社会主义思想”等三个不同议题分三个会场举行。桂林电子科技大学马克思主义学院党委书记邓国峰、南昌航空大学马克思主义学院教授郭莉、浙江科技学院宣传部长胡玉波、西藏民族大学马克思主义学院曹水群教授，中国石油大学理学院党委副书记杨东杰、国防科技大学黄嘉老师、山西财经大学王素萍老师等与会专家分别做了分会场主要发言，与会专家们就各自议题畅谈自己的观点，并进行了深入和充分的交流讨论。</p><p>&nbsp;&nbsp;&nbsp; 闭幕式由我校马院副院长黄岩主持。南京邮电大学陈宗章、中国石油大学（北京）杨东杰、山西财经大学王素萍等分别代表三个讨论小组做出总结汇报。马克思主义学院院长王海稳致闭幕词，他对本次研讨会所取得的丰硕成果进行了充分肯定，期待学者们与我校马克思主义学院在相关研究方面能进行更密切和深入的交流合作。大会在热烈的氛围中圆满落幕。</p><p><br><div style="text-align: center;"><img src="http://marxnew.hdu.edu.cn/_upload/article/images/62/b5/1f62b7c74b8babd6f96b503993cb/a239042b-a378-4d77-bdfe-6c19965b194d.jpg" border="0" style="letter-spacing: 0px;"></div></p><p style="text-align: center;"><img src="http://marxnew.hdu.edu.cn/_upload/article/images/62/b5/1f62b7c74b8babd6f96b503993cb/8c854331-07fb-4282-afe6-5883f2f5cb61.jpg" border="0"></p>`,
          fileList: [{
            name: `关于公布学校管理服务部门职责的通知 杭电人【2019】 85号.pdf`,
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }, {
            name: `关于做好网络开学工作的通知.pdf`,
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }],
          checkedDepartment: [
            '语音识别部',
            '图像处理部',
            '统计分析部',
          ],
        },
        dialogVisible: false,
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
      }
    },
    methods: {
      transformTime,
      changeHover($event) {
        $event.currentTarget.classList.add('hover');
      },
      removeHover($event) {
        $event.currentTarget.classList.remove('hover');
      },
      changeActive($event) {
        $event.currentTarget.classList.add('active');
      },
      removeActive($event) {
        $event.currentTarget.classList.remove('active');
      },
      goToDetail(id){
        this.$router.push({path: '/article/articleDetail', query:{id:id}})
      },
      goToEdit(id){
        this.$router.push({path: '/article/articleEdit', query:{id:this.context.id}})
      },
    },
    mounted() {
      console.log(this.$route.query.id)
    }
  }
</script>
<style scoped lang="less">
  .notice-detail {
    width: 100%;
    background-image: url("../../../images/officialWebsite/notice/background01.jpg");
    justify-content: center;
    letter-spacing: 0;

    .wrap {
      width: 1200px;
      padding: 80px 60px 120px;
      background: #F2F2F2;
      justify-content: space-between;

      .content {
        width: 750px;
        padding: 50px 60px;
        background: #F6F5F5;
        border: 1px solid #BFBFBF;
        align-items: center;

        .title {
          font-size: 24px;
          color: #003B90;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .context-info {
          font-size: 16px;
          color: #9D9C9C;
          justify-content: center;

          .context-info-item {
            margin: 0 10px;
            align-items: center;

            .icon {
              width: 15px;
              height: 15px;
              margin-right: 7px;
            }

            &.collect {
              .icon {
                background-image: url("../../../images/officialWebsite/notice/shoucang.png");
              }

              &.hover {
                color: #F54785;

                .icon {
                  background-image: url("../../../images/officialWebsite/notice/shoucang-active.png");
                }
              }
            }

            &.edit {
              .icon {
                background-image: url("../../../images/officialWebsite/notice/bianji.png");
              }

              &.hover {
                color: #1296DB;

                .icon {
                  background-image: url("../../../images/officialWebsite/notice/bianji-active.png");
                }
              }
            }

            &.delete {
              .icon {
                background-image: url("../../../images/officialWebsite/notice/delete.png");
              }

              &.hover {
                color: #FF405F;

                .icon {
                  background-image: url("../../../images/officialWebsite/notice/delete-active.png");
                }
              }
            }
          }
        }

        .divider{
          margin: 30px 0;
          width: 100%;
          height: 1px;
          border-bottom: 1px #9D9C9C dashed;
        }
        .text{
          letter-spacing: 1px;
          line-height: 30px;
        }
        .file-group{
          align-self: start;
          .file-item{
            width: auto;
            font-size: 14px;
            height: 30px;
            align-items: center;
            margin-bottom: 20px;
            .file-icon{
              width: 15px;
              height: 20px;
              margin-right: 10px;
              background-image: url("../../../images/officialWebsite/notice/wenjian.png");
            }
            .file-name{
              line-height: 30px;
              padding: 0 7px;
              border: 1px solid #BFBFBF;
            }
          }
        }

      }

      .notice-group{
        width: 290px;
        height: min-content;
        border: 1px solid #BFBFBF;
        background: #F6F5F5;
        padding: 10px;
        .notice-item{
          height: 45px;
          width: 270px;
          margin-bottom: 6px;
          align-items: center;
          padding: 0 10px;
          .square{
            height: 15px;
            width: 15px;
            margin-right: 10px;
            background: #00D2D4;
          }
          .title{
            width: 240px;
            font-size: 16px;
            color: #101010;
          }
          &.active{
            background: #ECECEC;
            .square{
              background: #F54785;
            }
            .title{
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>
<style lang="less">
  .notice-detail{
    .dialog-text{
      text-align: center;
    }
  }
</style>
