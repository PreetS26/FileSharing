import multer from 'multer'; // import statement of the multer

const upload = multer({ dest: 'uploads' }); // for handling multipart/form-data , which is primarily used for uploading files
// exporting the multer function so that other files can use the function
export default upload;