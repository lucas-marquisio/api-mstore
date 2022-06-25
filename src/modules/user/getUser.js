const db = require('../schemas/SchemaUser')

const getUser = async (email) => {
  const userFind = await db.findOne({ email })
  return userFind
}

module.exports = getUser