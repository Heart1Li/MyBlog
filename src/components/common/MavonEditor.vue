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
      value:''
    }
  },
  methods:{
    changeData(value, render){
            // console.log(value);
            // console.log(render);
            this.$emit('saveBody',render)
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