const dns = require('dns');
const servers = dns.getServers();
console.log(servers);

dns.lookup('www.baidu.com', (err, address, family) => {
  if (err) throw err;
  console.log('百度网站的IP地址是：' + address + '地址协议族是：IPV' + family);
});

dns.reverse('114.114.114.114', (err, hostnames) => {
  if (err) throw err;
  console.log(hostnames); //结果为[ 'public1.114dns.com' ]
});
