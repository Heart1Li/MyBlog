<template>
  <div class="add-article">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加文章</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-form ref="articlFormRef" :model="articlForm" label-width="80px">
        <el-form-item label="文章标题" >
          <el-col :span=11>
            <el-input v-model="articlForm.title" width="300px"></el-input>
          </el-col>   
        </el-form-item>
        <el-form-item label="文章分类">
          <el-select v-model="articlForm.category" placeholder="请选择分类">
            <el-option
              v-for="item in categories"
              :key="item.id"
              :label="item.type"
              :value="item.type"
            ></el-option>
            <!-- <el-option label="区域二" value="beijing"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="发表日期">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="articlForm.time"
              style="width: 100%;"
            ></el-date-picker>
            <!-- <input type="date" v-model="articlForm.time"> -->
          </el-col>
        </el-form-item>
        <mavon-editor @saveBody="saveBody(arguments)"></mavon-editor>
        <el-form-item class="submit-button">
          <el-button type="primary" @click="submitForm(articlForm)">立即创建</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import MavonEditor from "../../components/common/MavonEditor";
import getCategoryData from "../../network/category/getCategoryData";

//网络请求
import postArticleData from '../../network/article/postArticleData'
export default {
  name: "AddArticle",
  components: {
    MavonEditor,
  },
  data() {
    return {
      categories: [],
      articlForm: {
        title: "",
        author: "无限",
        category: "",
        time: "",
        body: "",
        markdown:"",
        star: 0,
      },
    };
  },
  methods:{
    saveBody(body){
      console.log(body[0])
    
      console.log(body[1])
      this.articlForm.body = body[0]
      this.articlForm.markdown = body[1]
    },
    //时间格式转换函数
    p(s) {
      return s < 10 ? '0' + s : s
      },
    submitForm(formData){
      // console.log(from)
      const d = new Date(formData.time)
      const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate())
      this.articlForm.time=resDate
      // console.log(this.articlForm)
      postArticleData(this.articlForm).then(res=>{
        if(res.data.status ==200){
          this.$router.push('/admin/article')
           this.$message({
          message: '创建文章成功',
          type: 'success'
        });
        }
        else{
          this.$message({
          message: '创建文章失败',
          type: 'warning'
        });
        }
        // console.log(res)
      })
    },
    resetForm(){
      this.$refs.articlFormRef.resetFields()
      // console.log()
    }
  },
  created() {
    getCategoryData().then((res) => {
      console.log(res);
      this.categories = res.data;
    });
    
  },
};
</script>

<style lang="scss" soped>
.el-card{
  margin-top: 20px;
  .submit-button{
    display: flex;
    justify-content: center;
    margin: 20px 0 0 0 !important;
  }
}
#main {
  .markdown-body{
    min-height:400px;
  }
}
.add-article {
  height: 100%;
}
</style>