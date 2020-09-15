<template>
  <div class="archive">
    <img-container>
      <div class="print">归档_</div>
    </img-container>
    <div class="main">
      <div class="time-line-container">
        <div>2020</div>
        <el-timeline :reverse="true">
          <el-timeline-item
            v-for="(activity, index) in articles"
            :key="index"
            :timestamp="articles.time"
          >
          {{activity.title}}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import ImgContainer from "../../components/common/ImgContainer";
export default {
  name: "Archive",
  components: {
    ImgContainer,
  },
  data() {
    return {
      articles: [
        {
          id: "001",
          title: "手写promise",
          author: "li",
          category: "手撕代码系列",
          time: "2020-2-5",
          body: "zasfajsfjaksfmalfmaksfmkamsfasfasf sfasf safasfasas",
          star: 15,
          isActive: true,
        },
        {
          id: "002",
          title: "JS基础",
          author: "li",
          category: "JavaScript",
          time: "2020-3-9",
          body:
            "昨天（北京时间 2020年9月10日）华为鸿蒙OS 2.0正式发布，预计明年华为手机全面支持。同时公布了面向开发者的BATE版。看了一下文档，同时支持java和js。那必须整一个试试。昨天（北京时间 2020年9月10日）华为鸿蒙OS 2.0正式发布，预计明年华为手机全面支持。同时公布了面向开发者的BATE版。看了一下文档，同时支持java和js。那必须整一个试试。",
          star: 10,
          isActive: true,
        },
      ],
    };
  }
};
</script>
<style lang="scss" scoped>
.archive {
  .main {
    min-height: 500px;
    background-color: white;
    margin: 0 18%;
    margin-top: -50px;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);

    .time-line-container {
      position: relative;
      margin: 0 28%;
      padding-top: 10%;
      padding-bottom: 10%;
      .time-line:last-child {
        border: none;
      }
      .time-line {
        position: relative;
        left: 1em;
        border-left: 1px solid #000;
        margin: 0;
        padding: 0;
        a {
          margin: 0;
          margin-top: -15px;
          padding-left: 10px;
          font-size: 0.8em;
          color: #bdbdbd;
        }
        p {
          margin: 0;
          padding-bottom: 8px;
          padding-left: 10px;
        }
      }
      .time-line::before {
        position: relative;
        // left: calc(-5px - 1.5rem);
        content: "";
        display: block;
        background-color: #dbdbdb;
        left: -0.2em;
        top: 1em;
        height: 9px;
        width: 9px;
        border-radius: 50%;
      }
    }
  }
}
</style>