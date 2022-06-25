const saveProduct = require('../../modules/admin/saveProduct')

const addProduct = async (req, res) => {
  try{
    const product = req.body
    await saveProduct(product)
    return res.status(200).json({sucess: "product registred!"})
  }catch(e) {
    console.log(e)
    return res.status(500).json({error: e})
  }
} 


module.exports = addProduct