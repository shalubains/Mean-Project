var Mongoose = require('mongoose');

const Schema = Mongoose.Schema;
var storySchema = new Schema({
    storyId:{type:String,required:true,unique:true},
    storyText:{type:String,required:true},
    createdDate:{type:Date,default:new Date()},
    rating:{type:String},
    image:{type:String,required:true}
});

var StoryModel = Mongoose.model('story',storySchema);
module.exports = StoryModel;