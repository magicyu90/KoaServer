import Koa from 'koa'
import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import Router from 'koa-router'
import config from './config'
import apiRouter from './src/routers'

const app = new Koa()
const router = new Router()

mongoose.Promise = global.Promise

// mongoose.connect(config.database, { useMongoClient: true }).then(
//   () => console.log('connect to db successfully'),
//   (err) => console.error(err)
// )
mongoose.connect(config.database)

app.use(logger())
app.use(bodyParser())

router.use('/api', apiRouter.routes(), apiRouter.allowedMethods())

app.use(router.routes(), router.allowedMethods())

app.listen(config.port, () => {
  console.log(`[demo] start-quick is starting at port ${config.port}`)
})
