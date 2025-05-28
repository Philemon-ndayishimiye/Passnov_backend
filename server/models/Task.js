
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Taskschema = new Schema({

    title:{
        required:true,
        type: String
    },
    description:{
        required:true,
        type: String
    },

   NumberOfPivot:{
    type:Number ,
    default: 0
   },

   category:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'category',
     required:true
   }

}, {timestamps:true});

const TaskModel = mongoose.model('suggestions' , Taskschema);

module.exports = TaskModel ; 