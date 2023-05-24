import { useState, useEffect } from 'react';
// import Gallery from 'react-easy-image-gallery';

interface Image {
  src: string;
  width: string;
  height: string;
}

export default function Gallery() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/image');
      const data = await res.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          key={image.src}
        />
      ))}
    </div>
  );
}
