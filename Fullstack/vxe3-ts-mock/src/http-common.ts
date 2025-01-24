import axios from 'axios';

//mock 接口地址可以为空字符串，真实接口配置为真实的接口地址。
const apiUrl = '/mock/api';
// create an axios instance
const service = axios.create({
  baseURL: apiUrl,
  timeout: 5000 // request timeout
});

export default service;
