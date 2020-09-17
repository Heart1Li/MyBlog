<template>
  <div class="tag">
    <img-container>
      <div class="print">{{type}}</div>
    </img-container>
    <main>
      <div>共计{{articles.length}}篇文章</div>
      <div class="articel-tag" v-for="item in articles" :key="item.id" @click="articleClick(item._id)">
        <a>{{item.time}}</a>
        <a>{{item.title}}</a>  
      </div>
    </main>
  </div>
</template>

<script>
import ImgContainer from "../../components/common/ImgContainer";

import getArticleByType from '../../network/article/getArticleByType'
export default {
  name: "Tag",
  data(){
    return{
      type:'',
      articles:[]
    }
  },
  components: {
    ImgContainer,
  },
  created(){
    this.type = this.$route.params.type
    getArticleByType(this.type).then(res=>{
      this.articles = res.data
      console.log(res)
    })
    //  console.log(this.$route.params.type)
  },
  methods:{
    articleClick(id){
      this.$router.push(`/home/article/${id}`)
    }
  }
};
</script>
<style lang="scss" scoped>
.tag {
  margin-top: 64px;
  height: 100%;
  main {
    min-height: 300px;
    background-color: white;
    margin: 0 18%;
    margin-top: -50px;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
      .articel-tag{
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        a {
          margin: 0 20px 0 20px;
        }
      }
  }
}
</style>
