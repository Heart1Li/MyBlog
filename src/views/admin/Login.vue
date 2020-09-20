<template>
<div class="login">
  <main> 
    <div class="login-box">
      <el-form ref="form" :model="loginForm" label-width="80px">
        <el-form-item label="用户名:" >
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码:" >
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
          <el-form-item class="login_button">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetFrom">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </main>
</div>
  
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
     
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

body,main::before{
  background: url(http://qgqbcw404.hn-bkt.clouddn.com/01.png) 0 / cover fixed;      
}
.login {
  height: 100%;
  background: url(http://qgqbcw404.hn-bkt.clouddn.com/01.png) 0 / cover fixed;
 
}
main{ 
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: hska(0,0%,100%,.3);
  overflow: hidden;
  border: 1px solid #000;
  height: 400px;
  width: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
  // color: white;
  z-index: 2;
  .login-box{
    .el-form-item{
    font: #000;
    
    font-size: rem;
    font-weight: 600; 
    
  }
    
  }
}

main::before{
  content: '';
  position: absolute;
  top:0;right:0;bottom:0;left:0;
  filter: blur(20px);
  margin:-30px;  
  z-index: -2;    
}
</style>