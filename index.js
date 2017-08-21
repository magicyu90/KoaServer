import Koa from 'koa'
import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'
import config from './config'

const app = new Koa();

mongoose.Promise = global.Promise
mongoose.connect(config.database)

app.use(bodyParser);

app.use(async(ctx) => {
    ctx.body = "Hello Hugo";
});

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000')