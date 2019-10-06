<template>
  <div id="app">
    <!-- 
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    -->
    <!-- 
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    -->
    <!-- <div>
      <blog-post
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
        v-on:enlarge-text="onEnlargeText"
      ></blog-post>
    </div>-->
    <!-- <custom-input v-bind:asd="searchText" v-on:input="searchText = $event"></custom-input> -->
    <!-- <alert-box>Something bad happened.</alert-box> -->
    <base-input></base-input>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import ButtonCounter from "./components/ButtonCounter.vue";
// import BlogPost from "./components/BlogPost.vue";
// import BaseInput from "./components/BaseInput.vue";
import CustomInput from "./components/CustomInput.vue";
// import AlertBox from "./components/AlertBox.vue";

export default {
  name: "app",
  components: {
    CustomInput
    // AlertBox
  },
  data: function() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue", postFontSize: 1 },
        { id: 2, title: "Blogging with Vue", postFontSize: 1 },
        { id: 3, title: "Why Vue is so fun", postFontSize: 1 }
      ],
      postFontSize: 1,
      searchText: ""
    };
  },
  methods: {
    onEnlargeText: function(post, enlargeAmount) {
      post.postFontSize += enlargeAmount;
    }
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
