import Mock from 'mockjs';

// 通过Mock生成模拟数据
const userdata = Mock.mock({
  'list|1000': [
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
  response: (params: QueryParam) => {
    const opt: QueryParam = Object.assign({
      currentPage: 1,
      pageSize: 20,
      searchKey: null
    }, params);
    let data: UserInfo[] = userdata.list;

    if (opt.searchKey) {
      data = data.filter(x => x.name && x.name.includes(opt.searchKey));
    }

    const start = (opt.currentPage - 1) * opt.pageSize;
    const end = start + opt.pageSize;
    data = data.slice(start, end);

    return {
      data: data,
      total: data.length
    };
  }
}];
