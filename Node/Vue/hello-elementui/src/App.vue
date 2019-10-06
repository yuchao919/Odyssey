<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button-demo></button-demo>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import ButtonDemo from "./components/ButtonDemo.vue";


export default {
  name: "app",
  components: {
    ButtonDemo
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
