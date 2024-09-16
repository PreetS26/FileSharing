import mongoose from "mongoose"; // this is the mongodb import statement
//This is a Mongoose schema definition for a File model
// which defines the structure of a document stored in a MongoDB collection
const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadCount: {
        type: Number,
        required: true,
        default: 0
    },
})

const File = mongoose.model('file', FileSchema);

export default File;