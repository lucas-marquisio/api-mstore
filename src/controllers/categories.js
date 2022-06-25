const listCategories = require('../modules/getCategories')

const categoriesList = async (req, res) => {
  try{
    const categories = await listCategories()
    return res.status(200).json(categories)
  }catch(e){}
}

module.exports = categoriesList