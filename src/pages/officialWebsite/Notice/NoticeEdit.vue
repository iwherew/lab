<template>
  <div class="notice-edit bg flex">
    <div class="wrap flex">
      <div class="content">
        <el-form ref="form" label-width="100px">
          <el-form-item label="通知部门：">
            <el-checkbox :indeterminate="isIndeterminate" border v-model="checkedAll" @change="handleCheckAllChange">
              全选
            </el-checkbox>
            <el-checkbox-group v-model="checkedDepartment" size="medium" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="(item,index) in allDepartment" border :label="item" :key="index"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="文章标题：">
            <el-input v-model="title" placeholder="请输入文章标题"></el-input>
          </el-form-item>
          <el-form-item label="正文内容：">
            <div class="white">
              <editor v-model="detail" :isClear="isClear" @change="change"></editor>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="file">
        <el-button type="success">保存文章</el-button>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :file-list="fileList">
          <el-button type="primary">点击上传文件</el-button>
        </el-upload>
      </div>
    </div>
  </div>
</template>
<script>
  import Editor from "../../../components/wangeditor";

  export default {
    components: {Editor},
    data() {
      return {
        isClear: false,
        detail: null,
        allDepartment: ['后勤部', '武装部', '财政部'],
        checkedDepartment: ['后勤部', '武装部', '财政部'],
        checkedAll: true,
        isIndeterminate: false, //全选框不确定状态
        title: null,
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      }
    },
    methods: {
      change(val){
        console.log(val)
      },
      handleCheckAllChange(val) {
        this.checkedDepartment = val ? this.allDepartment : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkedAll = checkedCount === this.allDepartment.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.allDepartment.length;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>
<style scoped lang="less">
  .notice-edit {
    width: 100%;
    background-image: url("../../../images/officialWebsite/notice/background01.jpg");
    justify-content: center;
    letter-spacing: 0;

    .wrap {
      width: 1200px;
      padding: 80px 75px 120px;
      background: #F2F2F2;

      .content {
        width: 900px;
      }

      .white {
        background: #FFFFFF;
      }
    }

    .item {
      margin: 20px 0;
    }

    .file {
      margin-top: 170px;
      margin-left: 50px;
    }
  }
</style>
<style lang="less">
  .notice-edit {
    .el-checkbox {
      background: #FFFFFF;
      margin-right: 10px;
      margin-bottom: 5px;
    }
    .el-upload-list__item{
      margin-top: 10px;
    }
    .el-button--success{
      margin-bottom: 30px;
    }
  }
</style>
