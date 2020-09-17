<template>
  <div id="main">
    <mavon-editor v-model="value" @change="changeData" />
  </div>
</template>

<script>
export default {
  nema:'MavonEditor',
  data(){
    return{
      value:'',
      render:''
    }
  },
  methods:{
    changeData(value, render){
      this.value = value,
      this.render = render
            
      this.$emit('saveBody',this.value,this.render)
            // this.contentHtml = render;
        }
  },
  updated(){
    // this.changeData()
    // console.log(this.value)
  }

}
</script>

<style>

</style>