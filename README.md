# Content Management System for Images/Video
	Backend for REST API where you can upload, get, delete images and videos from mongo DB.

## Features

* Upload Images, get Files by filename , get Images to render on website and delete images by imageId.
* Currently supported Image types are <b>png, jpg, jpeg and gif</b>. 
	You can customise as you wish.
* Upload Videos, get Files by filename , get Videos to render on website and delete videos by videoId.

* Currently supported Image types are <b>mp4, 3gpp, webm, ogg, x-matroska</b>.
	 You can customise as you wish.

## Run Locally
Clone the Project
```
git clone https://github.com/ritikraj6120/Content-Management
```
```
cd Content-Management
```
Install dependencies
```
npm install
```
Start server in main folder
```
node app.js
```
your application will start on port 5000.

## Environment Variables
To run this project, you will need to add your mongodb config of database to your .env file 

`MONGO_URI=`
## Tech Stack

**Node.js, MongoDB, Expressjs, GridFs** for backend

## Authors
- [@Ritik Raj](https://github.com/ritikraj6120)
