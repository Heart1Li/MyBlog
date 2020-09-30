<template>
  <div class="img-container">
   <slot></slot>
  </div>
</template>


<style lang="scss" scoped>
.img-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 76%;
  height: 400px;
  // border: 1px solid pink;
  border-radius: 1%;
  margin: 0 auto;
  margin-top: 64px;
  background: url("http://qgqbcw404.hn-bkt.clouddn.com/01.png");
  background-size: cover;
  .print {
  width: 300px;
  height: 100%px;
  text-align: center;
  color: white;
  font-size: 2.2rem;
  margin: auto;
  p{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-bottom: 5px;
    letter-spacing: 1px;
  }
    a{
      font-size: 0.9rem;
      padding-right: 10px;
      &::before{
        margin-right: 3px;
      }
    }
  }
  
}

</style>