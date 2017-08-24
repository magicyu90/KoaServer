import User from '../models/users.js'

export async function createUser(ctx) {

  const user = new User(ctx.request.body)
  console.log('user', JSON.stringify(user))

  try {
    await user.save()
  } catch (err) {
    ctx.throw(422, err.message)
  }

  const token = user.generateToken()
  const response = user.toJSON()

  delete response.password

  ctx.body = {
    user: response,
    token
  }
}

export async function getUser(ctx) {
  var res = await asyncFunction()
  ctx.body = res
}

function asyncFunction() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({
        'name': 'Hugo',
        'age': 27
      })
    }, 16)
  })
}