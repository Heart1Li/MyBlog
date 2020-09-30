<template>
  <div class="articles">
    <img-container>
      <div class="print">首页_</div>
    </img-container>
    <main class="main">
      <div class="left">
        <div v-if="articles.length===0" class="context"></div>
        <div class="article-container" v-for="item in articles" :key="item.id">
          <div>
            <header>
              <h2>{{item.title}}</h2>
              <div class="second-title">
                <a class="iconfont icon-biaoqian">{{item.category}}</a>
                <a class="iconfont icon-rili">{{item.time}}</a>
              </div>
            </header>
            <main>
              <p v-html="item.markdown"></p>
              <div>
                <a class="button-more" @click="arcticleCilck(item._id)">more</a>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="component">
          <Info></Info>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ImgContainer from "../../components/common/ImgContainer";
import Info from "../../components/content/profile/Info";

//网络请求
import getArticlesData from '../../network/article/getArticlesData'
export default {
  name: "Articles",
  components: {
    ImgContainer,
    Info,
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    //文章详情页按钮
    arcticleCilck(id){
      this.$router.push(`/home/article/${id}`)
    }
  },
  created(){
    getArticlesData().then(res=>{
      this.articles= res.data
      this.articles.isActive =false
      console.log(res)
    })
  }
};
</script>

<style lang="scss" scoped>
.main {
  /* border: 1px solid #000; */
  display: flex;
  /* width: 100%; */
  min-height: 500px;
  margin: -50px 8% 0 8%;
  margin-top: -50px;
  .left {
    flex: 2;
    width: 100%;
    min-height: 200px;
    min-width: 500px;
    // background-color: white;
    margin-right: 5%;
    .context {
      width: 100%;
      min-height: 250px;
      background-color: white;
      margin-bottom: 5px;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
      border-radius: 10px;
    }
    .article-container {
      width: 100%;
      min-height: 250px;
      background-color: white;
      margin-bottom: 5px;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
      border-radius: 10px;
      header {
        h2 {
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
          letter-spacing: 1px;
          font-size: 1.85em;
          font-weight: 550;
          margin: 0;
          padding: 5% 0 0 18%;
        }
        .second-title {
          padding: 10px 0 0 18%;
          
          a {
            cursor: pointer;
            text-decoration: none;
            font-size: 0.85em;
            padding-right: 20px;
            margin-left: 2px;
            &::before{
              margin-right: 3px;
            }
          }
          
        }
      }
      main {
        // text-indent: 2em;
        padding: 1% 15% 0 18%;
        letter-spacing: 1px;
        
        div{
          display: flex;
          justify-content: flex-end;
          text-align: center;
          
        }
       
        a {
          display: flex;
          justify-content: space-around;
          cursor: pointer;
          width: 100px;
          position: relative;
          padding: 10px 15px;
          margin-bottom: 20px;
          color:#111;
          text-decoration: none;
          font-size: 1em;
          font-weight: 600;
          // border: 1px solid #000;
          text-transform: uppercase;
          transition: 0.5s;
          overflow: hidden;
          text-align: center;
          
        }

        a::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          border-top: 2px solid #111;
          border-left: 2px solid #111;
          transition: 0.5s;
          transition-delay: 0.1s;
        }

        a:hover::before {
          width: 100%;
          height: 100%;
          transition-delay: 0s;
        }

        a::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 10px;
          height: 10px;
          border-bottom: 2px solid #111;
          border-right: 2px solid #111;
          transition: 0.5s;
          transition-delay: 0.1s;
        }

        a:hover::after {
          width: 100%;
          height: 100%;
          transition-delay: 0s;
        }
      }
      footer {
        display: flex;
        justify-content: flex-end;
        padding: 3% 15% 0 0;
        a {
          text-decoration: none;
          padding-bottom: 20px;
        }
        a:hover {
          cursor: pointer;
        }
      }
    }
  }
  .right {
    // background-color: white;
    min-height: 200px;
    min-width: 250px;
    .component {
      min-height: 250px;
      background-color: white;
      margin-bottom: 15%;
      border-radius: 5%;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
    }
  }
}
</style>