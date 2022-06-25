const saveUser = require('../../modules/user/register')

const RegisterUser = async (req, res) => {
  try{
    const user = req.body
    await saveUser(user)
    return res.status(200).json({message: "User created!"})
  }catch(e) {
    console.log(e)
    return res.status(500).send('')
  }
}

module.exports = RegisterUser