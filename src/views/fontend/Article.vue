<template>
  <div class="article">
    <img-container>
      <div class="print">
        <p>{{articleFrom.title}}</p>
        <a v-if="articleFrom" class="iconfont icon-rili">{{articleFrom.time}}</a>
        <a v-if="articleFrom" class="iconfont icon-biaoqian">{{articleFrom.category}}</a>
      </div>
    </img-container>
    <main>
   <mavon-editor
   v-model=" articleFrom.markdown"
   :subfield="false"
   :boxShadow="false"
   defaultOpen="preview"
   :toolbarsFlag="false"/> 
    </main>
  </div>
</template>

<script>
import ImgContainer from "../../components/common/ImgContainer";

import getArticleById from '../../network/article/getArticleById'
export default {
  name: "Profile",
  components: {
    ImgContainer,
  },
  data(){
    return{
      articleFrom:{
      }
    }
  },
  created(){
    getArticleById(this.$route.params.id).then(res=>{
      console.log(res)
      this.articleFrom = res.data
    })
   
  }
};
</script>
<style lang="scss" scoped>
.article {
  margin-top: 64px;
  height: 100%;
  main {
    min-height: 500px;
    background-color: white;
    margin: 0 18%;
    margin-top: -50px;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
}
</style>
