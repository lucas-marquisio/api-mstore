const Products = require('./schemas/SchemaProduct')

const productsList = async () => {
  const allProduct = await Products.find()
  return allProduct
}

module.exports = productsList