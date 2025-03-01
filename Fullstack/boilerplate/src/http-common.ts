import axios from 'axios';

const apiUrl = '/mock/api';  //mock 接口地址可以为空字符串，真实接口配置为真实的接口地址。

export default axios.create({
  baseURL: apiUrl,
  timeout: 5000 // request timeout
});
