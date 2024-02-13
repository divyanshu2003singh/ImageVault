// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import Register from './components/Register';
import Login from './components/Login';
import ImageUpload from './components/ImageUpload';

const App = () => {
  return (
    <Router>
      <div>
        <Routes> {/* Wrap Routes around Route components */}
          <Route path='/register' element={<Register />} /> {/* Use element prop */}
          <Route path='/login' element={<Login />} />
          <Route path='/image-upload' element={<ImageUpload />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
