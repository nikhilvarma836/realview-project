import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('image', file); // 'image' should match the backend controller param

    try {
      await axios.post('http://13.220.180.242:8080/api/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Upload successful!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed.');
    }
  };

  return (
    <div className="mb-4">
      <input type="file" accept="image/*" onChange={handleChange} />
      <button onClick={handleUpload} className="btn btn-primary ml-2">Upload</button>
    </div>
  );
};

export default ImageUpload;
