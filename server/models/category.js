
const mongoose = require('mongoose') ;

const Schema = mongoose.Schema ;

const categorySchema = new Schema({

    title:{
        type:String
    },

    suggestions: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'suggestions'
    }]
}, {timestamps:true});

const category = mongoose.model('category' , categorySchema);

module.exports = category;