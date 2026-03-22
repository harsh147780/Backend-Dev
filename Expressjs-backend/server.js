const express = require('express');
const studentRoutes = require('./Routes/studentRoutes');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// dotenv.config();

app.use(express.json());
app.use('/api/students', studentRoutes);

//  DB connect + server start together
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(' Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(` Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log(' DB Connection failed:', err);
    });