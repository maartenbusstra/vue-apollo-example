<script>
import Todos from './Todos.vue';
import TwitterFeed from './TwitterFeed.vue';

export default {
  name: 'app',
  data: () => ({
    msg: 'Hello, Vue!',
  }),
  components: {
    Todos,
    TwitterFeed
  },
}
</script>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <todos />
    <twitter-feed />
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
