<template>
  <div class="app-heading">
    
     <h1 @click="changeTitle">{{title}}</h1>



  </div>
</template>

<script>
export default {
  name: 'appHeading',
//   data(){
     
//   },
  props: {
   title: {
       type: String
   }
  },
  methods:{
      changeTitle:function(){
          this.title = "Google"
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    background-color: orange;
    padding-bottom: 10px ;
    color: white;
}
</style>
