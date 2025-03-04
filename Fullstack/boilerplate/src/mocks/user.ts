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
  response: (args: any) => {
    const body: QueryParam = args.body;
    const opt: QueryParam = Object.assign({
      currentPage: 1,
      pageSize: 20,
      searchKey: null
    }, body);
    console.log(body);

    let data: UserInfo[] = userdata.list;
    let total = data.length;
    if (opt.searchKey) {
      data = data.filter(x => x.name && x.name.includes(opt.searchKey));
      total = data.length;
    }

    const start = (opt.currentPage - 1) * opt.pageSize;
    const end = start + opt.pageSize;

    let pageData = data.slice(start, end);

    return {
      data: pageData,
      total: total
    };
  }
}];
