<template>
  <div class="home">
    <nav-bar></nav-bar>
    
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '../../components/content/navbar/NavBar'
import Footer from '../../components/content/footer/Footer'

export default {
  name: 'Home',
  components: {
    NavBar,
    Footer,
    // ImgContainer,
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
}
</style>
