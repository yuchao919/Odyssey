const { EventEmitter } = require('events');

class KKK extends EventEmitter {
  constructor() {
    super();
    this.middleware = [];
    this.fns = null;
    this.on('request', (ctx, next) => {
      this.fns = this.fns || compose(this.middleware);
      this.fns(ctx, next);
    });
  }

  use(fn) {
    this.middleware.push(fn);
    return this;
  }
}

const app = new KKK();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.emit('request', { hello: 'world' });

// console.log(app.middleware.length);

function compose(middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!');
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!');
  }

  return function(context, next) {
    // last called middleware #
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(
          fn(context, function next() {
            return dispatch(i + 1);
          })
        );
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
