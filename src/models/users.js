import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from '../../config'
import jwt from 'jsonwebtoken'

const User = new mongoose.Schema({
  type: {
    type: String, default: 'User'
  },
  name: {
    type: String
  },
  username: {
    type: String, required: true, unique: true
  },
  password: {
    type: String, required: true
  }
})


User.methods.validatePassword = (password) => {
  const user = this

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return reject(err)
      }
      resolve(isMatch)
    })
  })
}


User.methods.generateToken = () => {

  const user = this
  console.log('user', JSON.stringify(user))

  return jwt.sign({ id: user.id }, config.token)
}

export default mongoose.model('user', User)