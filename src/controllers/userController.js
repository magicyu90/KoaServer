import User from '../models/users.js'

export async function createUser(ctx) {
  const user = new User(ctx.request.body)

  try {
    await user.save()
    const token = user.generateToken()
    const response = user.toJSON()

    delete response.password

    ctx.body = {
      user: response,
      token
    }

  } catch (error) {
    ctx.throw(422, error) //unprocessable entity
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
        'age': 26
      })
    }, 16)
  })
}