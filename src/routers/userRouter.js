import * as User from '../controllers/userController'
import Router from 'koa-router'


const userRouter = new Router();

userRouter.get('/getUser', User.getUser)
userRouter.post('/createUser', User.createUser)


export default userRouter

