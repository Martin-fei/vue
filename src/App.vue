<template>
  <div id="app">
    <router-link to="/a">a</router-link>
      <button @click="toa">a</button>
      <button @click="toc">c</button>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  methods:{
    toa(){
      this.$router.push({path:"/a"})
    },
    toc(){
      // this.$router.push({path:"/c",query:{name:'jack'}})
      this.$router.push({name:"C",query:{name:'jack'}})
    }
  }
}
</script>
