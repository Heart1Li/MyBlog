<template>
  <div class="admin-article">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-button type="primary" @click="addArticle">添加文章</el-button>
      <el-table :data="articlesData" stripe style="width: 100%">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="title" label="文章标题" width="180"></el-table-column>
        <el-table-column prop="time" label="时间" width="180"></el-table-column>
        <el-table-column prop="category" label="类别"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle @click="updateDialog(scope)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteDialog(scope)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import getArticlesData from "../../network/article/getArticlesData";
import deleteArticleData from "../../network/article/deleteArticleData";
export default {
  name: "AdminArticle",
  data() {
    return {
      articlesData: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getArticlesData().then((res) => {
        //  console.log(res)
        this.articlesData = res.data;
      });
    },
    deleteDialog(data) {
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        deleteArticleData(data.row._id).then((res) => {
          // console.log(res);
          if (res.data.status == 200) {
            this.getData();
            this.$message({
              message: "删除成功",
              type: "success",
            });
          } else {
            this.$message({
              message: "删除失败",
              type: "warning",
            });
          }
         
        });
      });
    },
    updateDialog(){
      
    },
    addArticle() {
      this.$router.push("/admin/article/add");
    },
  },
};
</script>

<style>
</style>