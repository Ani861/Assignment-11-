import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DogImage = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDogImage = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setImage(response.data.message);
      setLoading(false);
    } catch (error) {
      setError('Error fetching the dog image');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {image && <img src={image} alt="Random Dog" style={{ width: '300px', height: '300px' }} />}
      <button onClick={fetchDogImage}>Fetch Another Dog Image</button>
    </div>
  );
};

export default DogImage;
