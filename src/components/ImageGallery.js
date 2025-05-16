import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios.get('http://13.220.180.242:8080/api/images')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  };

  return (
    <div className="row">
      {images.map(image => (
        <div className="col-md-4 mb-4" key={image.id}>
          <div className="card shadow">
            <img
              src={`http://13.220.180.242:8080/api/images/view/${image.id}`}
              className="card-img-top"
              alt={image.name}
            />
            <div className="card-body">
              <h5 className="card-title">{image.name}</h5>
              <p className="card-text">Rating: {image.rating ?? 'N/A'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
