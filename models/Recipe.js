const {
    model,
    Schema
} = require('mongoose');

const teamDevSchema = new Schema({
    name: String,
    description: String,
    createdAt: String,
    charge: String,
})

module.exports = model('TeamDev', teamDevSchema);