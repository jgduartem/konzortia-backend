const {Schema, model} = require('mongoose');

const clasificationSchema = new Schema({
   name: String, 
},{
    timestamps: true
})

module.exports = model('clasifications', clasificationSchema);
