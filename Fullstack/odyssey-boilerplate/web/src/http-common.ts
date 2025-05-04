import axios from 'axios';

//mock 接口地址可以为空字符串，真实接口配置为真实的接口地址。
const mockUrl = '/mock/api';
const serverUrl = "http://localhost:51888/api";

export default axios.create({
  baseURL: serverUrl,
  timeout: 5000, // request timeout
  headers: {
    "Content-type": "application/json"
  }
});
