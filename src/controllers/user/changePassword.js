const savePassword = require('../../modules/user/changePassowrd')
const getUserPassword = require('../../modules/user/getUserPassowrd')
const bcrypt = require('bcrypt')

const changePassowrd = async (req, res) => {
  try{
    const { oldPassword, newPassword } = req.body
    console.log(req.user)
    if(!req.user) return res.status(403).json({error: "password not match!"})
    const userId = req.user.id
    const userFinded = await getUserPassword(userId)
    if(!oldPassword) return res.status(401).json({error: "password not match!"})
    if(!await bcrypt.compare(oldPassword, userFinded.password)) return res.status(401).json({error: "password not match!"})
    const bcryptsalt = parseInt(process.env.BCRYPT_SALT)
    const newPasswordHashed = await bcrypt.hash(newPassword, bcryptsalt)
    await savePassword(userId, newPasswordHashed)
    
    return res.status(201).json({message: 'password changed'})
  }catch(e){
    console.log(e)
    return res.status(500).json({error: e})
  }
}

module.exports = changePassowrd