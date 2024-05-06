import React, { useState, useEffect } from 'react';

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch('https://source.unsplash.com/random');
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        setImageUrl(response.url);
      } catch (error) {
        console.error('Error fetching random image:', error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Random"
          style={{ display:'flex',height: '250px', width:'400px', }}
        />
      )}
    </div>
  );
};

export default RandomImage;
