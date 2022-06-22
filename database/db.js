const mongoose = require('mongoose');
require('dotenv').config()
const mongoURI = process.env.MONGO_URI;

class Database { // Singleton
	async connect() {
		try {
			await mongoose.connect(mongoURI);
			console.log('mongo db connected successfully')
		} catch (error) {
			console.error(error);
		}
	}

	async close() {
		try {
			await this.connection.close();
		} catch (error) {
			console.error(error);
		}
	}
}

module.exports = new Database();