// server.js
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const jsonServer = require('json-server'); // 👈 dùng require để load CJS module

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: true })

server.use(middlewares);

server.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

server.use(router);

server.listen(3000, () => {
  console.log('✅ JSON Server is running at http://localhost:3000');
});
