import File from '../models/file.js'; // this is the import statement for the file.js that is used  for the connection of the database
import bcrypt from 'bcrypt'; // Bcrypt is used for making the
import dotenv from 'dotenv'; // dotenv is used for keeping the code and the passwordkeys safe

// inculsion of the dotenv so that it does not been kept just for the import
dotenv.config();
// this upload image function is  responsible for inserting the image or the document to the server
export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }

    try {
        const file = await File.create(fileObj);
        const baseUrl = 'http://localhost:4000';
        response.status(200).json({ path: `${baseUrl}/file/${file._id}`});
        console.log(`${baseUrl}/file/${file._id}`);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}
// this is an express js route handler for the getting the data from the user
export const getImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);

        file.downloadCount++;

        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}