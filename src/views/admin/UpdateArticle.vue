<template>
  <div class="update-article">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/article' }">文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>修改文章</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-form ref="articlFormRef" :model="articleForm" label-width="80px">
        <el-form-item label="文章标题" >
          <el-col :span=11>
            <el-input v-model="articleForm.title" width="300px"></el-input>
          </el-col>   
        </el-form-item>
        <el-form-item label="文章分类">
          <el-select v-model="articleForm.category" placeholder="请选择分类">
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
              v-model="articleForm.time"
              style="width: 100%;"
            ></el-date-picker>
            <!-- <input type="date" v-model="articlForm.time"> -->
          </el-col>
        </el-form-item>
        <mavon-editor v-model="articleForm.body"/>
        <el-form-item class="submit-button">
          <el-button type="primary" @click="updateClick">立即创建</el-button>
          <el-button >重置</el-button>
        </el-form-item>
      </el-form>
      
    </el-card>
  </div>
</template>

<script>
import getArticleById from '../../network/article/getArticleById'
import getCategoryData from "../../network/category/getCategoryData";
import updateArticleData from '../../network/article/updateArticleData'
export default {
  name:'UpdateArticle',
  data(){
    return {
      articleForm:{},
      categories:[]
    }
  },
  methods:{
    updateClick(){
      updateArticleData(this.articleForm._id,this.articleForm).then(res=>{
        if(res.data.status == 200){
          this.$router.push('/admin/article')
           this.$message({
            message: '更新文章成功',
            type: 'success'
           })
          }
          else{
            this.$message({
          message: '更新文章失败',
          type: 'warning'
           })
          }
      })
    }
  },
  created(){
    console.log(this.$route.params.id)
    getArticleById(this.$route.params.id).then(res=>{
      console.log(res)
      this.articleForm = res.data
    })
    getCategoryData().then((res) => {
      console.log(res);
      this.categories = res.data;
    });
  }
}
</script>