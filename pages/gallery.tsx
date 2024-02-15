import { useState, useEffect } from 'react';
// import Gallery from 'react-easy-image-gallery';
import Image from 'next/image';
import { AspectRatio } from '@yamada-ui/react';

interface Image {
  src: string;
  width: number;
  height: number;
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
      {images.map((image, index) => (
        <AspectRatio w='md' ratio={4 / 3} key={index}>
          <Image
            key={index}
            src={image.src}
            width={image.width}
            height={image.height}
            alt='gallery image'
          />
        </AspectRatio>
      ))}
    </div>
  );
}
