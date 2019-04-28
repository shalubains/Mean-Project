var Mongoose = require('mongoose');

const Schema = Mongoose.Schema;
var userSchema = new Schema({
    email: {type:String,required:true,unique:true},
    name:{type:String,required:true},
    createdDate:{type:Date,default:new Date()},
    wallet:{type:Number,required:true,default:100},
    password:{type:String,required:true},
    image:{type:String}
});

var UserModel = Mongoose.model('user',userSchema);
module.exports = UserModel;