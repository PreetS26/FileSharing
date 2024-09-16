import { useState, useEffect, useRef } from 'react'; // ye hai ki tere react ke library folder me se useState aur useEffect use karene ke liye banaya hai ye import statement
import './App.css'; // ye css import karne ke liye use hota hai taki tere framework me koi issue na aapaye
import { UploadFile } from './services/api.js';
//ye tere actual front end ke liye use hota hai isme tere pure frontend ka code aayega including all the things and this frontend uses the external css
function App() { 
  const [file, setFile] =   useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef(); // the file input reference keyword us used to as an constant variable

  const url = 'https://img.freepik.com/free-photo/nature-journey-travel-trekking-summertime-concept-vertical-shot-pathway-park-leading-forested-area-outdoor-view-wooden-boardwalk-along-tall-pine-trees-morning-forest_343059-3064.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await UploadFile(data);
        console.log(response);
        setResult(response); // Assuming the API returns a URL or result to display
      }
    };
    getImage();
  }, [file]);
// this is an onclick function
  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='container'>
      <img src={url} className='img' alt="Nature" />
      <div className='wrapper'>
        <h1>File Sharing Application!</h1>
        <p>Upload and share the download link.</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        {result && (
          <a href={result} target='_blank' rel="noopener noreferrer">
            {result}
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
