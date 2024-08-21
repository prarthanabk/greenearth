const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    messageid:{
        type:Number
    },
    fullname:
    {
        type:String
    },
    email:
    {
        type:String
    },
    message:
    {
        type:String
    }

})   
const Orders = mongoose.model("feedbackquery",newSchema);

module.exports=Orders