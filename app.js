const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.json({
        message: "tickety-api using express works"
    });
});

// Default Error Response
app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({
        message,
        data
    })
})

const PORT = 8080;
mongoose.connect('mongodb+srv://ini_admin:ini_admin@cluster0.uppheku.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    })
}).catch(err => console.log(err));


