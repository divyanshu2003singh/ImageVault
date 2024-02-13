// ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import './ImageUpload.css';

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const onChange = e => setFile(e.target.files[0]);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('jwtToken');
      const formData = new FormData();
      formData.append('image', file);
      const res = await axios.post('http://localhost:4080/api/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `${token}`
        }
      });
      console.log(res.data);
      window.alert('Image upload successful!');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="image-upload-container">
      <div className="card">
        <h2>Image Upload</h2>
        <form className="form-container" onSubmit={onSubmit}>
          <input type='file' onChange={onChange} />
          <button type='submit'>Upload</button>
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;
