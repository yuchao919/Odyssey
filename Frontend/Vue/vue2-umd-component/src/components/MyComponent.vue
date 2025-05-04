<template>
  <div class="my-component">
    <h2>{{ title }}</h2>
    <button @click="count++">点击次数: {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    title: {
      type: String,
      default: '默认标题'
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.my-component {
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
}
</style>