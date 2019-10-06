const Redis = require('ioredis');

const redis = new Redis(6379, '192.168.1.101', {
  password: 'qwe123'
});

redis.connect(() => {
  debugger;
  console.log(arguments);
});