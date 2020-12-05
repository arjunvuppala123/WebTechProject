const Data = require('../models/dataschema')

const hiphop = (req, res) => {
    var genre = req.body.Genre
    Data.find({ Genre: genre }).then(
        res.json({
            message: 'User succesfully added'
        })
    )
}
module.exports = {
    hiphop
}