export default [{
  url: '/mock/api/getApiInfo',
  method: 'get',
  response: () => {
    return {
      code: 200,
      title: 'mock api test.'
    };
  }
},
{
  url: '/mock/api/getCategory',
  type: 'get',
  response: () => {
    return {
      code: 200,
      data: [
        {
          id: 1,
          title: 'JAVA',
          href: '/category/java'
        },
        {
          id: 2,
          title: 'SpringBoot',
          href: '/category/SpringBoot',
        },
        {
          id: 3,
          title: 'MySql',
          href: '/category/MySql'
        },
        {
          id: 4,
          title: '随笔',
          href: '/category/live'
        }
      ]
    };
  }
}
];
