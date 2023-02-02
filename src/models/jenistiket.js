const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JenisTiket = new Schema({
    jenis: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('JenisTiket', JenisTiket);
