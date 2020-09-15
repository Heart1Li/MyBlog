<template>
  <li @click="itemClick">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name:'NavBarItem',
  props:{
    path:String,
  },
  methods:{
    itemClick(){
      // console.log('1')
      // console.log(this.path)
      this.$router.push(this.path).catch(err => {err})
      // this.isActive = true
    }
  }

}
</script>
<style scoped>
</style>