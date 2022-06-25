const Product = require('../schemas/SchemaProduct')

const deleteProduct = async (productId) => {
  await Product.findByIdAndDelete({_id: productId})
}

module.exports = deleteProduct