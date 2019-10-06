const dns = require('dns');

/* 
dns.lookup('nodejs.org', (err, addresses, family) => {
  console.log('addresses:', addresses);
});
 */

dns.resolve4('baidu.com', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach(a => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});
