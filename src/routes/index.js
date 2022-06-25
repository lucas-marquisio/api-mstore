const express = require('express')
const routes = express.Router()
const verificationUser = require('../controllers/middlewares/verificationUser')
const controllAdmin = require('../controllers/middlewares/controllAdmin')
const productsList = require('../controllers/products')
const RegisterUser = require('../controllers/user/register')
const Login = require('../controllers/user/login')
const addProduct = require('../controllers/admin/addProduct')
const modifyPriceProduct = require('../controllers/admin/modifyPriceProduct')
const verifyToken = require('../controllers/validToken')
const addCategory = require('../controllers/admin/addCategory')
const categoriesList = require('../controllers/categories')
const deleteProduct = require('../controllers/admin/deleteProduct')
const changePassword = require('../controllers/user/changePassword')

routes.get('/products', productsList)
routes.post('/register', RegisterUser)
routes.post('/login', Login)
routes.get('/validate-token', verifyToken)
routes.get('/categories', categoriesList)
routes.put('/password', verificationUser, changePassword)
routes.post('/product', controllAdmin, addProduct) //
routes.post('/price-product', controllAdmin,  modifyPriceProduct)
routes.post('/category', controllAdmin, addCategory) 
routes.delete('/product/:id', controllAdmin, deleteProduct)


module.exports = routes