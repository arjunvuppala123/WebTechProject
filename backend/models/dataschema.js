const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Genre: {
        type: String
    },
    Ranking: {
        type: String
    },
    Rating: {
        type: String
    }
}, { timestamps: true })

const dataSc = mongoose.model('Data', dataSchema)
module.exports = dataSc;