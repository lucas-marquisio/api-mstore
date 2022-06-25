const jwt = require('jwt-simple')

const verifyToken = (req, res) => {
  try{
    const dataToken = req.headers.authorization
    if(!dataToken) return res.json({message:  false})
    const [bearer, token] = dataToken.split(' ')
    const tokenDecoded = jwt.decode(token, process.env.JWT_SECRET)
    if(tokenDecoded.valid < Date.now()) return res.json({message:  false})
    req.user = tokenDecoded
    return res.json({ message: true })
  }catch(e){
    return res.status(500).json({ error: e })
  }
}
module.exports = verifyToken