import { useState, useEffect } from 'react';
import Gallery from 'react-easy-image-gallery';

export default function MyGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('http://localhost:3000/api/image');
      const data = await res.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div>
      <Gallery images={images} />
    </div>
  );
}
