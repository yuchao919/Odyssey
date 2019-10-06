const Koa = require('koa');
const app = new Koa();
const debug = require('debug')('test');

console.error();
// console.log(app.handleRequest);

app.use(async ctx => {
  debug(`${ctx.req.method} ${ctx.req.url} begin:${Date.now()}`);
  ctx.body = 'Hello World';
  debug(`${ctx.req.method} ${ctx.req.url} end  :${Date.now()}`);
});

app.listen(3000);

// app.addListener();
// app.callback();
// app.context;
// app.createContext();
// app.emit();
// app.env;
// app.eventNames();
// app.getMaxListeners();
// app.inspect();
// app.keys;
// app.listen();
// app.listenerCount();
// app.listeners();
// app.middleware;
// app.on();
// app.once();
// app.onerror();
// app.prependListener();
// app.prependOnceListener();
// app.proxy;
// app.removeAllListeners();
// app.removeListener();
// app.request;
// app.response;
// app.setMaxListeners();
// app.silent;
// app.subdomainOffset;
// app.toJSON();
// app.use();
