import Mock from 'mockjs';

var data = Mock.mock({
  'list|5': [{
    'id|+1': 1,
    'name': '@cname',
    'age|25-50': 1,
    'sex': () => {
      return Math.random() > 0.5 ? 'male' : 'female';
    },
    first: '@FIRST',
    middle: '@FIRST',
    last: '@LAST',
    full: '@first @middle @last'
  }]
});

console.log(JSON.stringify(data));

// 一个可以创建随机名字、数字，并能将其组合成一个随机对象的帮助类

// var names = [...new Array(1000)].map(x => Mock.mock('@cname'));
// var nameMap = {};
// names.forEach(x => {
//   if (!nameMap[x]) {
//     nameMap[x] = 0;
//   }
//   nameMap[x]++;
// });
// for (const item in nameMap) {
//   if (nameMap[item] > 1) {
//     console.log(item);
//   }
// }