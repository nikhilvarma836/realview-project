import React from 'react';
import ImageUpload from './components/ImageUpload';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Image Gallery</h1>
      
      {/* Image Upload Section */}
      <ImageUpload />

      {/* Image Display Section */}
      <ImageGallery />
    </div>
  );
}

export default App;

