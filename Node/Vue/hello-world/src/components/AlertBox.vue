<template>
  <div class="demo-alert-box">
    <strong>Error!</strong>
    <slot></slot>
  </div>
</template>

<style scoped>
.demo-alert-box {
  font-size: 1.2em;
  line-height: 1.5em;
  padding: 10px 20px;
  background: #f3beb8;
  border: 1px solid #f09898;
  text-align: left;
}
</style>
