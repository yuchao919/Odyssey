/* const dns = require('dns');*/
const dns = require('dns');
const util = require('util')

console.log(dns.getServers());

dns.lookup('iana.org', (err, address, family) => {
  // console.log(util.format('address: %j family: IPv%s', address, family));
});
// address: "192.0.43.8" family: IPv4
