import Mock from 'mockjs';

// 通过Mock生成模拟数据
const userdata = Mock.mock({
  'list|10': [
    {
      'id|+1': 10000,
      'name': '@cname',
      'age|18-60': 1,
      'email': '@email',
    },
  ],
});

export default [{
  url: '/mock/api/queryUsers',
  method: 'post',
  response: () => {
    return userdata.list;
  }
}];
