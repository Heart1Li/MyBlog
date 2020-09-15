<template>
  <nav id="navbar" :class="navBarFixed == true ? 'navBarWrap' :'navBarNoWrap'">
    <div class="nav-bar-container">
      <a href="#" class="nav-brand">
        <strong>无限</strong>
      </a>
      <div class="nav-collapse">
        <ul>
          <nav-bar-item path="/home">
            <a href="#" class="nav-item">首页</a>
          </nav-bar-item>

          <nav-bar-item path="/home/aechive">
            <a href="#" class="nav-item">归档</a>
          </nav-bar-item>

          <nav-bar-item path="/category">
            <a href="#" class="nav-item">分类</a>
          </nav-bar-item>

          <nav-bar-item path="/home/proflie">
            <a href="#" class="nav-item">关于我</a>
          </nav-bar-item>
          <!-- <nav-bar-item>
            <a href="#" class="nav-item">搜索</a>
          </nav-bar-item>-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavBarItem from './NavBarItem'
export default {
  name: "NavBar",
  components:{
    NavBarItem
  },
  data(){
    return{
      scrollTop:'',
      navBarFixed:false,
    }
  },
  methods:{
    watchScroll(){
      console.log('1')
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 50 时，实现吸顶效果
        if (this.scrollTop > 49) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
     
    }
  },
  mounted(){
    window.addEventListener('scroll',this.watchScroll)
  }
};
</script>
<style lang="scss" scoped>
.navBarWrap{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 30px;
  padding: 12px 16px;
  transition: 0.8s;
  background: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: 0.8s;
}
.navBarNoWrap{
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 40px;
  padding: 12px 16px;
  transition: 0.8s;
}
#navbar {
  
  .nav-bar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 5%;
    height: 40px;
    .nav-brand {
      padding: 5px 0;
      margin-right: 16px;
      text-decoration: none;
      font-size: 1.25rem;
      color: black;
    }
    .nav-collapse {
      font-weight: 300;
      margin-right: 10px;
      li {
        display: inline-block;
        margin: 0 8px;
      }
      a {
        text-decoration: none;
        color: black;
        font-size: 0.875rem;
      }
    }
  }
}
</style>
