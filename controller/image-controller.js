const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
require('dotenv').config()
const mongoURI = process.env.MONGO_URI;
const conn = mongoose.createConnection(mongoURI);

let gfs;

conn.once('open', () => {
	// Init stream
	gfs = Grid(conn.db, mongoose.mongo);
	gfs.collection('uploads');
});


const imageMatch = ["image/png", "image/jpg", "image/gif", "image/jpeg"];
const videoMatch = ["video/mp4", "video/3gpp", "video/webm", "video/ogg", "video/x-matroska"];

const uploadImageVideo = (req, res) => {
	// console.log("Inside uploadImageVideo",req.file)
	if (!req.file)
		return res.status(404).json("File not found");
	res.status(200).send("file Saved Successfully");
}

const uploadErrorhandler = (err, req, res, next) =>
	res.status(415).send({ error: err.message })


const getFiles = (req, res) => {
	gfs.files.find().toArray((err, files) => {
		if (err) return res.status(500).send("Internal server Error")
		// Check if files
		if (!files || files.length === 0) {
			res.status(404).json({ err: 'No files exist', files: false });
		} else {
			files.map(file => {
				if (imageMatch.indexOf(file.contentType) === -1) {
					file.isImage = false;
				} else {
					file.isImage = true;
				}
				if (videoMatch.indexOf(file.contentType) === -1) {
					file.isVideo = false;
				}
				else {
					file.isVideo = true;
				}
			});
			res.status(200).json(files);
		}
	});
}

// not of much use
const getSingleFile = async (req, res) => {
	try {
		const file = await gfs.files.findOne({ filename: req.params.filename });
		if (!file) {
			return res.status(404).json({ err: 'No file exists' });
		}
		// File exists
		return res.status(200).json(file);
	}
	catch (err) {
		console.log("error in exist function ", err);
		res.status(500).send("Internal Server Error");
	}

}

const getImage = async (req, res) => {
	try {
		const file = await gfs.files.findOne({ filename: req.params.filename });
		if (!file) {
			return res.status(404).json({ err: 'No file exists' });
		}
		if (imageMatch.indexOf(file.contentType) !== -1) {
			// Read output to browser
			const readstream = gfs.createReadStream(file.filename);
			readstream.pipe(res);
		} else {
			res.status(415).json({ err: 'Not an Image' });
		}

	} catch (err) {
		console.log("error in exist function ", err);
		res.status(500).send("Internal Server Error");
	}

}

const getVideo = async (req, res) => {
	try {
		const file = await gfs.files.findOne({ filename: req.params.filename });
		if (!file) {
			return res.status(404).json({ err: 'No file exists' });
		}
		if (videoMatch.indexOf(file.contentType) !== -1) {
			// Read output to browser
			const readstream = gfs.createReadStream(file.filename);
			readstream.pipe(res);
		} else {
			res.status(415).json({ err: 'Not a Video' });
		}
	}
	catch (err) {
		console.log("error in exist function ", err)
		res.status(500).send("Internal Server Error");
	}

}

const deleteFile = async (req, res) => {
	try {
		const a = new mongoose.mongo.ObjectId(req.params.id);
		console.log(typeof a)
		// const found = await gfs.exist({ _id: a });
		const file = await gfs.files.findOne({ _id:a});
		if (!file) {
			return res.status(404).json({ err: 'No Such file exists' });
		}
		// console.log(found)
		// if (!found)
		// 	return res.status(404).send('File does not exist');
		const gridStore = await gfs.remove({ _id: a, root: 'uploads' });
		return res.status(200).send("Successfully deleted file")
	}
	catch (err) {
		console.log("error in exist function ", err)
		res.status(500).send("Internal Server Error");
	}


}

module.exports = { uploadImageVideo, uploadErrorhandler, getFiles, getSingleFile, getImage, getVideo, deleteFile }