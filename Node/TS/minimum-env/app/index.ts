import express from 'express';

// Create Express server
const app = express();

app.get('/', (req: any, res: any) => {
  res.send('hello word');
});

app.listen(9999, () => {
  console.log(`express服务已经启动:localhost:9999`);
});
