const ProductSchema = require('../schemas/SchemaProduct')

const priceProduct = async (product) => {
  const {id, price, offer } = product
  console.log(product)
  await ProductSchema.findByIdAndUpdate(id, {
    price: price,
    offer: offer
  })
}

module.exports = priceProduct