const UserSchema = require('./schemas/SchemaUser')

const saveUserAdmin = async (user) => {
  const Admin = UserSchema({
    ...user
  })
  Admin.save()
}

module.exports = saveUserAdmin