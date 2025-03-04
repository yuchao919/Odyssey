import Mock from 'mockjs';

// 通过Mock生成模拟数据
const userdata = Mock.mock({
  'list|999': [
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
  response: ({ body }: any) => {
    const opt: QueryParam = Object.assign({
      currentPage: 1,
      pageSize: 20,
      searchKey: null
    }, body);

    let data: UserInfo[] = userdata.list;

    if (opt.searchKey) {
      data = data.filter(x => x.name && x.name.includes(opt.searchKey));
    }

    let total = data.length;

    const start = (opt.currentPage - 1) * opt.pageSize;
    const end = start + opt.pageSize;

    let pageData = data.slice(start, end);

    return {
      data: pageData,
      total: total
    };
  }
}];
