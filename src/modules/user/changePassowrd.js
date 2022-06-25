const User = require('../schemas/SchemaUser')

const changePassowrd = async (userId, userPassword) => {
   await User.findByIdAndUpdate(userId, {
    password: userPassword
  })
}

module.exports = changePassowrd