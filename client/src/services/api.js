import axios from 'axios'; 
//teh axios is used to build a connection between the client and the server
// const API_URL = ''; // to accept the requests from teh backend and give the inputs given by the user and send it to the database
// It is the export file function and used to export the error handling to the app.js

const API_URL = 
process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:4000'

export const UploadFile = async (data) => {
        try {
            let response = await axios.post(`${API_URL}/upload`, data);
            return response.data.path;
            // console.log(response.data.path)
        } catch (error) {
            console.error('Error while calling the API', error.message);
            throw error;
        }
};