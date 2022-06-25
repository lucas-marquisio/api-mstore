const ProductSchema = require('../schemas/SchemaProduct')

const saveProduct = async (product) => {
  const { name, price, category, about, offer, image } = product
  const Product = new ProductSchema({
    name,
    price,
    category,
    about, 
    offer,
    image 
  })
  await Product.save()
}

module.exports = saveProduct