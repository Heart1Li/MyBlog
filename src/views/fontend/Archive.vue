<template>
  <div class="archive">
    <img-container>
      <div class="print">归档_</div>
    </img-container>
    <div class="main">
      <div class="time-line-container">
        <p>共计{{articles.length}}篇文章</p>
        <div class="time-point" v-for="time in timeline" :key="time.id">
          {{time}}
          <div v-for="item in articles" :key="item.id">
            <div v-if="item.time.includes(time)" class="liner" @click="articleClick(item._id)">
              <p>{{item.title}}</p>
              <p>{{item.time}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgContainer from "../../components/common/ImgContainer";

//网络请求
import getArticlesData from "../../network/article/getArticlesData";
export default {
  name: "Archive",
  components: {
    ImgContainer,
  },
  data() {
    return {
      articles: [],
      //
      timeline: [],
    };
  },
  created() {
    getArticlesData().then((res) => {
      this.articles = res.data;
      this.computedTime();
    });
  },
  methods: {
    computedTime() {
      // let timeline
      for (let i = 0; i < this.articles.length; i++) {
        this.timeline.push(this.articles[i].time.substring(0, 4));
      }
      for (let i = 0; i < this.timeline.length; i++) {
        for (let j = i + 1; j < this.timeline.length; j++) {
          if (this.timeline[i] == this.timeline[j]) {
            this.timeline.splice(j, 1);
            j--;
          }
        }
      }
      this.timeline.sort((a, b) => {
        return b - a;
      });
      console.log(this.timeline);
    },
    articleClick(id) {
      this.$router.push(`/home/article/${id}`);
    },
  },
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
      margin: 0 18%;
      padding-top: 10%;
      padding-bottom: 10%;
      .time-point {
        font-size: 1.25em;
        font-weight: 600;
        padding-bottom: 25px;
      }

      .liner {
        font-size: 0.85em;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        p {
          margin: 5px 0;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>