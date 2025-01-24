import Mock from 'mockjs';

// 通过Mock生成模拟数据
const userdata = Mock.mock({
  'list|10': [
    {
      'id|+1': 1,
      'name': '@cname',
      'age|18-60': 1,
      'email': '@email',
    },
  ],
});

export default [
  {
    url: '/mock/api/getUserInfo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: userdata.list
      };
    }
  },
];
