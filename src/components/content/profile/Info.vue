<template>
  <div class="personal-info">
    <img src="../../../assets/img/touxiang.jpg" alt="">
    <p>Connecting the Dots..</p>
    <div class="icon">
      <a  href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes" target="_blank" class="iconfont icon-icon"></a>
      <a href=mailto:wuxian_dots@163.com class="iconfont icon-youxiang"></a>
      <a href="https://github.com/Heart1Li" target="_blank" class="iconfont icon-github"></a>
    </div>
  </div>
</template>

<script>
export default {
  name:'Info'
}
</script>

<style lang="scss" scoped>
 .personal-info{
   position: relative;
   img{
     position: absolute;
     left: calc(50% - 50px);
     margin-top: 10px;
     height: 100px;
     width: 100px;
     box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.5);
     border-radius: 50%;
   }
   p{
     margin: 0 auto;
     font-size: 1.05rem;
     font-weight: 600;
     padding-top: 130px;
     text-align: center;
   }
   .icon {
     display: flex;
    //  justify-content: space-between;
     justify-content: space-evenly;
     padding-top: 20px;
     a{
       color: #000;
       text-decoration: none;
       font-size: 1.65em;
      //  padding: 0 20px 0 20px;
     }
   }
 }
</style>