const getUser = require('../../modules/user/getUser')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')

const Login = async (req, res) => {
  try{
    const { email, password } = req.body
    const user  = await getUser(email)
    if(!user) return res.status(403).json({ error: "user not found" })
    if(!await bcrypt.compare(password, user.password)) return res.status(403).json({error: "password error"})
    delete user.password
    const one_hour = 3600000
    const payload = {
      id: user._id,
      user: user.name,
      admin: user.admin,
      valid: Date.now() + ( one_hour * 6)
    }
    return res.status(200).json({
      name: user.name,
      admin: user.admin,
      token: await jwt.encode(payload, process.env.JWT_SECRET)
    })
  }catch(e) {
    console.log(e)
    res.status(500).json({error: e})
  }
}

module.exports = Login