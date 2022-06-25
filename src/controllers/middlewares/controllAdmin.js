const jwt = require('jwt-simple')

const controllAdmin = (req, res, next) => {
  try{
    const dataToken = req.headers.authorization
    if(!dataToken) return res.status(401).json({error: "user not acepted"})
    const [bearer, token] = dataToken.split(' ')
    const tokenDecoded = jwt.decode(token, process.env.JWT_SECRET)
    if(!tokenDecoded.admin) return res.status(401).json({error: 'user not admin'})
    req.user = tokenDecoded
    next()
  }catch(e){}
}

module.exports = controllAdmin