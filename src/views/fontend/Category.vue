<template>
  <div class="category">
    <img-container>
      <div class="print">分类_</div>
    </img-container>
    <main>
      <div class="tags" >
        <a v-for="item in categories" :key="item.id" :style="{color:getColor()}"
        @click="tagClick(item)">{{item.type}}</a>
      </div>
    </main>
  </div>
</template>

<script>
import ImgContainer from "../../components/common/ImgContainer";

//网络请求
import getCategoryData from '../../network/category/getCategoryData'
export default {
  name:'Category',
  components:{
    ImgContainer,
  },
  data(){
    return {
      categories:[],
      color:''
    }
  },
  computed:{

  },
  methods:{
    getColor(){
      let r=Math.floor((Math.random()*0.75) *0xff).toString(16)
      return `#${r}${r}${r}`
    },
    //跳转到标签详情页
    tagClick(type){
      this.$router.push(`/home/category/${type}`)
    }
  },
  created(){
    getCategoryData().then(res=>{
      this.categories = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
  .category {
    main {
    min-height: 400px;
    background-color: white;
    margin: 0 18%;
    margin-top: -50px;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
      .tags{
        font-size: 1.35em;
        padding: 13% 0 10% 0;
        margin: 0 18%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        a{
          cursor: pointer;
          padding: 8px 10px;
        }
      }
    }
  }

</style>