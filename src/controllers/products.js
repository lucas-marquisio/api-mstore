const productList = require('../modules/getProducts')

const products = async (req, res) => {
  try{
    const allProducts = await productList()
    return res.status(200).json(allProducts)
  }catch(e) {
    res.status(500).json({
      error: "server error"
    })
  }
}

module.exports = products