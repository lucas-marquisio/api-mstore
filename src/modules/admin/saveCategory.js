const CategorySchema = require('../schemas/SchemaCategory')

const saveProduct = async (category) => {
  const Category = new CategorySchema({
    category: category.name
  })
  await Category.save()
}

module.exports = saveProduct