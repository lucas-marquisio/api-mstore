const User = require('../schemas/SchemaUser')

const getUserPassword = async (userPassword) => {
  const userInfo = await User.findOne({ _id: userPassword})
  return userInfo
}

module.exports = getUserPassword