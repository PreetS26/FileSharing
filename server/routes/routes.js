import express from 'express'; // this is to import the express js
import upload from '../utils/upload.js';// this import is to access the upload.js file
import { uploadImage, getImage } from '../controller/image-controller.js'; // this is to import the controller file

const router = express.Router(); // declaring the function of the import statement


router.post('/upload', upload.single('file'), uploadImage); // This line sets up a POST route at /upload in an Express.js application, which is used for handling file uploads.
router.get('/file/:fileId', getImage); //This line sets up a GET route at /file/:fileId in an Express.js application, which is used to serve files to users.

export default router;