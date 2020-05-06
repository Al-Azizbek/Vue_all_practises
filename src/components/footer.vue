<template>
  <div class="app-footer">
    
     <h1>{{title}}</h1>
     



  </div>
</template>

<script>
export default {
  name: 'appFooter',
//   data(){
//       return{
//           title : "Hello Footer."
//       }
//   },
  props: {
   title: {
       type:String
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    background-color: blue;
    padding-bottom: 30px ;
    color: white;
}
</style>
