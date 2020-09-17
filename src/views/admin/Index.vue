<template>
  <div class="admin">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="../../assets/logo.png" alt />
          <span>个人博客管理系统</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="230px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#333744"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-menu-item index="/admin/data">
              <i class="el-icon-s-data"></i>
              <span slot="title">网页数据</span>
            </el-menu-item>
            <el-menu-item index="/admin/user">
              <i class="el-icon-user"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="/admin/article">文章列表</el-menu-item>
                <el-menu-item index="/admin/article/add">添加文章</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/admin/tags">
              <i class="el-icon-collection-tag"></i>
              <span slot="title">标签管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Admin",
};
</script>

<style lang="scss" scoped>
.admin {
  height: 100%;

  .el-container {
    height: 100%;
    .el-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #373d41;
      .logo {
        color: azure;
        display: flex;
        align-items: center;
        font-size: 20px;
        img {
          height: 60px;
          width: 60px;
          border-radius: 50%;
          background-color: azure;
          margin-right: 30px;
        }
      }
    }
  }
  .el-aside {
    background-color: #333744;
    height: 100%;

    color: azure;
    .el-menu {
      background-color: #333744;
      height: 100%;
      color: azure;
    }
  }
  // .el-main{
    // height: 690px;
    // overflow: scroll;
  // }

}
</style>