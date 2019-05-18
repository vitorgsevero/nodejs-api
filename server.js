const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//starting app
const app = express();

//starting database
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

requireDir('./src/models');

const Product = mongoose.model('Product');



app.listen(3001);