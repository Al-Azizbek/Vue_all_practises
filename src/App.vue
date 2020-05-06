<template>
  <div id="app">
    
    <appHeading v-bind:title = "title"/>
    
    <appIndex v-bind:userNames = "userNames" />
    <appFooter v-bind:title = "title"/>
  
  </div>
</template>

<script>

import appHeading from './components/heading.vue'
import appFooter from './components/footer.vue'
import appIndex from './components/index.vue'

export default {
  name: 'App',
  components: {
   
    appHeading,
    appFooter,
    appIndex,
  },
  data(){
    return{
       title: "CodingNewBie",
       userNames : [
            {name:"Azizbek", speci: "Math", show:false},
            {name:"Azizbe", speci: "Mat", show:false},
            {name:"Azizb", speci: "Ma", show:false},
            {name:"Aziz", speci: "M", show:false},
        ]
    }
  }
 

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
