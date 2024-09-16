import mongoose from "mongoose"; //the import used for the database the mongodb atlas
import dotenv from 'dotenv'; //for keeping the passwords and the code hashed so that no one can access it
// inclusion of the dotenv function
dotenv.config();

// the connection to the database
// it uses the connection link got from the server of the mongodb atlas
const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb+srv://user:user1234@file-sharing.61gdt.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}
//export of the db.js file so that other files can access it
export default DBConnection;