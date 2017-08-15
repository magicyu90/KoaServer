import Koa from "koa";
import {loggerFunc} from "./src/middleware/logger-async";
const app = new Koa();

app.use(loggerFunc());

app.use(async(ctx) => {
    ctx.body = "Hello Hugo";
});

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000')