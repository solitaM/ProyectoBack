const express = require('express');
const cors = require ('cors');
const logger = require ('morgan')

const app = express()
const indexRouter = require('./routes/index')
const userRouter = require ('./routes/user')
const {connect} = require ('./db/db')

//librerias//
app.use (logger('dev')); 
app.use(express.json());
app.use(cors());

//Routes//
app.use('/', indexRouter)
app.use ('/home',userRouter)
connect();

module.exports = app 