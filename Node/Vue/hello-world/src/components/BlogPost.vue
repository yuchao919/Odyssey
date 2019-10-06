<template>
  <div class="blog-post" :style="{ fontSize: post.postFontSize + 'em' }">
    <h3>{{ post.title }}</h3>
    <button @click="$emit('enlarge-text', post, 0.1)">Enlarge text</button>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: "blog-post",
  props: ["post"]
};
</script>

<style scoped>
.blog-post {
  font: bold large;
}
</style>
