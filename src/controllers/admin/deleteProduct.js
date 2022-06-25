const delProduct = require('../../modules/admin/deleteProduct')

const deleteProduct = async (req, res) => {
  try{
    const idProduct = req.params.id
    console.log(idProduct)
    await delProduct(idProduct)
    return res.status(200).json({message: "user deleted!"})
  }catch(e){
    return res.status(500).json({error: e})
  }
}

module.exports = deleteProduct