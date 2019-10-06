const net = require("net");

var defult = {
  port: 8124
};

var options = {
  port: 80,
  host: "www.baidu.com"
};

const client = net.createConnection(options, () => {
  //'connect' listener
  console.log("connected to server!");
  // client.write("world!\r\n");
});
client.on("data", data => {
  console.log(data.toString());
  client.end();
});
client.on("end", () => {
  console.log("disconnected from server");
});

client.on("error", err => {
  console.log(err);
});
