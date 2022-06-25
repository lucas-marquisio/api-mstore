const saveCategory = require('../../modules/admin/saveCategory')

const addCategory = async (req, res) => {
  try{
    const category = req.body
    await saveCategory(category)
    res.status(200).json({message: "category added"})
  }catch(e) {
    console.log(e)
    res.send('')
  }
} 


module.exports = addCategory