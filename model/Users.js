const mongoose = require ('mongoose');

const postschema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


module.exports=mongoose.model('post',postschema)