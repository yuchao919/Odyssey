import Mock from 'mockjs';
import type { MockMethod, MockConfig } from 'vite-plugin-mock';

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

let idIncreasement: number = 10000 + userdata.list.length + 1;

export default [{
  url: '/mock/api/queryUsers',
  method: 'post',
  response: ({ body }: { body: QueryParam; }) => {
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
},
{
  url: '/mock/api/updateUser',
  method: 'post',
  response: ({ body }: { body: UserInfo; }) => {
    // 新增数据
    if (!body.id) {
      const newUser: UserInfo = Object.assign({}, {
        id: 0,
        name: body.name,
        age: body.age,
        email: body.email
      });

      newUser.id = idIncreasement++;
      userdata.list.push(newUser);
      return newUser.id;
    }
    const data: UserInfo[] = userdata.list;
    const user = data.find(x => x.id === body.id);
    if (!user) {
      return null;
    }
    user.name = body.name;
    user.age = body.age;
    user.email = body.email;

    return user.id;
  }
},
{
  url: '/mock/api/deleteUsers',
  method: 'post',
  response: ({ body }: { body: number[]; }) => {
    const data: UserInfo[] = userdata.list;
    const deleteIds: number[] = body;
    userdata.list = data.filter(x => !deleteIds.includes(x.id));
  }
}] as MockMethod[];
