const express = require('express');
const Database = require('./database/db.js'); 
const app = express();
const morgan = require('morgan');
const  Router =require("./router/router.js") ;
const port = process.env.PORT || 5000
Database.connect();

// Middleware
app.use(morgan('dev'));
app.use(express.json())
app.use('/', Router)

app.listen(port, () => console.log(`Server started on port ${port}`));
