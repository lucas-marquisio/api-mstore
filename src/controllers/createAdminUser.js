const saveUserAdmin = require('../modules/createAdmin')
const bcrypt = require('bcrypt')

const createAdmin = async () => {
  try{
    const bcryptSalts = parseInt(process.env.BCRYPT_SALT)
    const admin = {
      name: "admin",
      password: await bcrypt.hash("admin", bcryptSalts),
      email: "admin",
      admin: true
    }
    await saveUserAdmin(admin)
    console.log('usuario admin foi criado! email: admin, password: admin')
    process.on('SIGINT', () => process.exit(1))
  }catch(e) {
    return console.log(e)
  }
}

createAdmin()