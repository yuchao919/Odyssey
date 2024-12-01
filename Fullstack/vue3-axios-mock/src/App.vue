<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import axios from 'axios';
import * as userService from './services/UserService.js';

const msg = ref('Welcome to Your Vue.js App');
const userinfo = ref([]);
const categorys = ref([]);

async function getData() {
  await axios.get('/mock/api/getApiInfo').then(res => {
    console.log(res.data);
    msg.value = res.data.title;
  }
  );
}

async function getUserInfo() {
  const res = await userService.getUserInfo();
  console.log(res.data);
  userinfo.value = res.data.data;
}

async function getCategory() {
  const res = await userService.getCategory();
  console.log(res.data);
  categorys.value = res.data.data;
}

onMounted(async () => {
  await getData();
  await getUserInfo();
  await getCategory();
});

</script>

<template>
  <h1>{{ msg }}</h1>
  <div>
    人员列表
  </div>
  <div>
    <ul>
      <li v-for="(user) in userinfo.list">
        {{ user.id }} : {{ user.name }} {{ user.age }} {{ user.email }}
      </li>
    </ul>
  </div>
  <div>
    目录
  </div>
  <div>
    <ul>
      <li v-for="(category) in categorys">
        {{ category.id }} : {{ category.title }} {{ category.href }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
