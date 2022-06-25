const priceProduct = require('../../modules/admin/priceProduct')

const modifyPriceProduct = async ( req, res ) => {
  try {
    const product = req.body
    await priceProduct(product)
    res.send('')
  }catch(e) {
    console.log(e)
    res.send('')
  }
}

module.exports = modifyPriceProduct