const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Provinsi = new Schema({
    nama: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Provinsi', Provinsi);
