import UserRouter from './userRouter'
import Router from 'koa-router'

const router = new Router()

router.use('/users', UserRouter.routes(), UserRouter.allowedMethods())
// TODO: The other routers

export default router

