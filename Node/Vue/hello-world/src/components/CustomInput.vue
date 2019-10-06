<template>
  <div>
    <label>{{ asd }}</label>
    <br>
    <input v-model="asd">
    <br>
    <!-- 和如下等价 -->
    <input v-bind:value="asd" v-on:input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: "custom-input",
  props: {
    asd: String
  }
};
</script>
