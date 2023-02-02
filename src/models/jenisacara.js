const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JenisAcara = new Schema({
    jenis: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('JenisAcara', JenisAcara);
