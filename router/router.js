const express = require('express');
const { uploadImageVideo, uploadErrorhandler, getFiles, getSingleFile, getImage, getVideo, deleteFile } =require( "../controller/image-controller.js");
const  upload =require("../utils/upload.js");

const Router = express.Router()

// image and video router

// @route POST /upload
// @desc  Uploads file to DB    
Router.post('/upload', upload.single('file'), uploadImageVideo, uploadErrorhandler);

// @route GET /files
// @desc  Display all files in JSON 
Router.get('/files', getFiles);

// @route GET /files/:filename
// @desc  Display single file object    
Router.get('/files/:filename', getSingleFile);

// @route GET /image/:filename
// @desc Display Image  
Router.get('/image/:filename', getImage);

// @route GET /video/:filename
// @desc Display Video   
Router.get('/video/:filename', getVideo);


// @route DELETE /files/:id
// @desc  Delete file    
Router.delete('/files/:id', deleteFile);

module.exports = Router