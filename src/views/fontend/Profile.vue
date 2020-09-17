<template>
  <div class="profile">
    <img-container>
      <div class="print">关于我_</div>
    </img-container>
    <main></main>
  </div>
</template>

<script>
import ImgContainer from "../../components/common/ImgContainer";
export default {
  name: "Profile",
  components: {
    ImgContainer,
  },
};
</script>
<style lang="scss" scoped>
.profile {
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
  }
}
</style>
