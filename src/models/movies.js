const {Schema, model} = require("mongoose");

const movieSchema = new Schema({
    name: String,
    director: String,
    clasification: String
}, {
    timestamps: true
})

module.exports = model('movie', movieSchema)