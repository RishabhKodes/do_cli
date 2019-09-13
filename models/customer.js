const mongoose = require('mongoose');

//customer Schema
const customerSchema = mongoose.Schema({
    firstname: {type : String },
    lastname : {type : String },
    phone : {type : String} 
});

//Define and export
module.exports = mongoose.model('Customer', customerSchema);