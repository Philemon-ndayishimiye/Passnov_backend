
const express = require('express') ;

const Router = express.Router();

const {createSuggestion , getSuggest ,  UpdateUpvot}= require('../controller/taskcontroller');


Router.post('/register' ,  createSuggestion);
Router.get('/getsuggestion' , getSuggest);
Router.put('/updateUpvot/:id', UpdateUpvot)

module.exports = Router