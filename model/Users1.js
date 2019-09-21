const mongoose = require ('mongoose');

const Postschema = mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    number:{
        type:Number,
        required:true
    },

});


module.exports=mongoose.model('data',Postschema);