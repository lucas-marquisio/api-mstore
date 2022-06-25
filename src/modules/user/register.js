const UserSchema = require('../schemas/SchemaUser')
const bcrypt = require('bcrypt')

const saveUser = async (user) => {
  const { registerUser, registerEmail, registerPassword } = user
  const bcryptSalt = parseInt(process.env.BCRYPT_SALT)
  const User = new UserSchema({
    name: registerUser,
    email: registerEmail,
    admin: false,
    password: await bcrypt.hash(registerPassword, bcryptSalt)
  })
  await User.save()
}

module.exports = saveUser


