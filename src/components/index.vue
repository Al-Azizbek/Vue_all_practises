<template>
  <div class="app-index">
    
     
    <h1>{{title}}</h1>
    <ul>
        <li v-for="name in userNames" :key="name" @click="name.show = !name.show">
            
            <h1>{{name.name}}</h1>
            <h4 v-show="name.show">{{name.speci}}</h4>
        </li>
      
    </ul>
      
  </div>
</template>

<script>
export default {
  props:{
    userNames:{
         type: Array,
         required: true,
      }
    
  },
  name: 'appIndex',
  data(){
    return{
        title: "Hello I am Index",
       
    }
  },
  methods : {
      addAge(){
          return this.age++
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    background-color: aquamarine;
    
}

</style>
