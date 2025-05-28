
const express = require('express') ;

const Router = express.Router();

const{createCategory , getCategory} = require('../controller/categoryController')

Router.post('/register' , createCategory );
Router.get('/getcategories/:id', getCategory)

module.exports = Router