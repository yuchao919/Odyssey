/**
 * 
    UDP / Datagram Sockets
        Class: dgram.Socket
            Event: 'close'
            Event: 'error'
            Event: 'listening'
            Event: 'message'
            socket.addMembership(multicastAddress[, multicastInterface])
            socket.address()
            socket.bind([port][, address][, callback])
            socket.bind(options[, callback])
            socket.close([callback])
            socket.dropMembership(multicastAddress[, multicastInterface])
            socket.getRecvBufferSize()
            socket.getSendBufferSize()
            socket.ref()
            socket.send(msg, [offset, length,] port [, address] [, callback])
            socket.setBroadcast(flag)
            socket.setMulticastInterface(multicastInterface)
                Examples: IPv6 Outgoing Multicast Interface
                Example: IPv4 Outgoing Multicast Interface
                Call Results
            socket.setMulticastLoopback(flag)
            socket.setMulticastTTL(ttl)
            socket.setRecvBufferSize(size)
            socket.setSendBufferSize(size)
            socket.setTTL(ttl)
            socket.unref()
            Change to asynchronous socket.bind() behavior
        dgram module functions
            dgram.createSocket(options[, callback])
            dgram.createSocket(type[, callback])

 */

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', err => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
// server listening 0.0.0.0:41234
