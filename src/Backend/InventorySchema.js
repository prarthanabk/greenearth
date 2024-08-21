const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    inventoryid:{
        type:Number
    },
    pname:
    {
        type:String
    },
    presentlocation:
    {
        type:String
    },
    qty:
    {
        type:Number
    },
    cost:
    {
        type:Number
    },
    Noofpackets:
    {
        type:Number
    },
    capacity:
    {
        type:Number
    }

})   
const InventorySchema = mongoose.model("inventory",newSchema);

module.exports=InventorySchema