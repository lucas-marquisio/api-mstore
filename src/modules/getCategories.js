const SchemCategories = require('./schemas/SchemaCategory')

const getCategories = async () =>  {
  const categoriesList = await SchemCategories.find()
  return categoriesList
}

module.exports = getCategories