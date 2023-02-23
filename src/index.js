const Koa = require("koa");
const Router = require("koa-router");
const { koaBody } = require("koa-body");
const config = require("./config");
const mysql = require("./mysql");

async function main() {
  const db = await mysql({
    host: config.database.host,
    user: config.database.username,
    password: config.database.password,
    database: config.database.dbName,
  });

  const app = new Koa();
  const router = new Router();

  router.get("/", async (ctx, next) => {
    ctx.status = 200;
    ctx.response.set({
      "Content-Type": "text/html",
    });
    ctx.body = `<html><body><p>hello world</p></body></html>`;
  });

  router.post("/register", async (ctx, next) => {});

  router.post("/login", async (ctx, next) => {});

  app.use(koaBody());
  app.use(router.routes()).use(router.allowedMethods());

  app.listen(config.port, () => {
    console.log(`server is running at ${config.port}`);
  });
}

main()
