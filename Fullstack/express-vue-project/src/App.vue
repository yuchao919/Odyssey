<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import UserService from "./services/UserService.js";

const userList = ref([]);

const newUser = reactive({
  userName: null,
  password: null,
  userInfo: null,
  isEnable: 1
});

// 生命周期钩子
onMounted(async () => {
  await loadData();
});

async function loadData() {
  const res = await UserService.getAll();
  userList.value = res.data;
}

async function request() {
  debugger;
}

async function createUser() {
  const user = Object.assign({}, newUser);

  const res = await UserService.create(user);

  console.log("Success!");

  await loadData();
}

async function deleteUser(userId) {
  const res = await UserService.remove(userId);
  await loadData();
}

async function disableUser(userId) {
  const res = await updateUser(userId, { isEnable: false });
  await loadData();
}

async function enableUser(userId) {
  const res = await updateUser(userId, { isEnable: true });
  await loadData();
}

async function updateUser(userId, params) {
  const args = Object.assign({ userId }, params);
  const res = await UserService.update(args);
  await loadData();
}


</script>

<template>
  <div>
    <div>Add a new user</div>
    <dl>
      <dt>UserName</dt>
      <dd><input type="text" v-model="newUser.userName" /></dd>
      <dt>Password</dt>
      <dd><input type="password" v-model="newUser.password" /></dd>
      <dt>userInfo</dt>
      <dd><textarea v-model="newUser.userInfo"></textarea></dd>
      <dt>Status</dt>
      <dd><input type="radio" id="r1" value="1" v-model.number="newUser.isEnable" />
        <label for="r1">enable</label>
        <input type="radio" id="r2" value="0" v-model.number="newUser.isEnable" />
        <label for="r2">disable</label>
      </dd>
    </dl>
    <button @click="createUser">Add</button>
  </div>
  <div>
    <table class="user-table">
      <thead>
        <tr>
          <th>UserId</th>
          <th>UserName</th>
          <th>UserInfo</th>
          <th>IsEnable</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user.id">
          <td>{{ user.userId }}</td>
          <td>{{ user.userName }}</td>
          <td>{{ user.userInfo }}</td>
          <td>{{ user.isEnable ? '启用' : '禁用' }}</td>
          <td>
            <div class="operations">
              <span v-if="!user.isEnable"><a href="javascript:void(0);" @click="enableUser(user.userId)">启用</a></span>
              <span v-if="user.isEnable"><a href="javascript:void(0);" @click="disableUser(user.userId)">禁用</a></span>
              <span><a href="javascript:void(0);" @click="deleteUser(user.userId)">删除</a></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.user-table {
  width: 800px;
}

.user-table,
.user-table td,
.user-table th {
  border: 1px solid #eee;
}

.operations {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.operations>span {
  flex-grow: 1;
  text-align: right;
  padding-right: 3px;
  box-sizing: border-box;
}
</style>
