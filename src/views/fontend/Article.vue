<template>
  <div class="article">
    <img-container>
      <div class="print">文章详情页_</div>
    </img-container>
    <main>
   <mavon-editor
   v-model=" articleFrom.bafMarkdown"
   :subfield="false"
   :boxShadow="false"
   defaultOpen="preview"
   :toolbarsFlag="false"/> 
    </main>
  </div>
</template>

<script>
import ImgContainer from "../../components/common/ImgContainer";
export default {
  name: "Profile",
  components: {
    ImgContainer,
  },
  data(){
    return{
      articleFrom:{
        bafMarkdown:'<h2><a id="1_0"></a>标题1</h2> <p>说真的，Angular真的不似React开发人员说得那么差劲，只是我们常常服从于脑海中已有的偏见。对于门外汉来说，Angular看起来既庞大又复杂。但很多人没有意识到的是，它背后使用的编程语言都是JavaScript，主要区别在于建构方式的不同。Angular本身并没有那么差劲。如果你真的那么想了，那多半是由于尚未了解前笼罩的刻板印象。</p> <h3><a id="2_2"></a>表体2</h3> <p>对Angular的评价之所以褒贬不一，是因为无论是它的外观还是工作方式都与你习惯的有所不同。又或者是你自身存在的知识局限，让Angular没有按照你的要求运行。我是一名Angular开发人员，但并非因为它是我的首选本地框架就推荐它。如果你正在寻找一种以Angular为基座的React部件，它不合适。这是一个讨论部件，它超越了代码的细微差别，而且是“x比y更好”之类的东西。它是一个元视角，聚焦代码、功能以及在我们使用Angular作为工具的能力范围中，Angular所处的位置。<br /> <a href="http://qgqbcw404.hn-bkt.clouddn.com/02.png" target="_blank"></a></p>',
      }
    }
  },
  created(){
    console.log(this.$route.params.id)
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
