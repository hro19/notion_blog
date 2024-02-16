import { useState, useEffect } from 'react';
// import Gallery from 'react-easy-image-gallery';
import Image from 'next/image';
import { AspectRatio, Box, Center } from '@yamada-ui/react';
import {
  Carousel,
  CarouselSlide,
  CarouselControlNext,
  CarouselControlPrev,
  CarouselIndicators,
} from '@yamada-ui/carousel';

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
    <>
      <Box mb={3}>
        <Carousel autoplay delay={3000} gap={0}>
          <CarouselSlide as={Center} bg='primary'>
            1
          </CarouselSlide>
          <CarouselSlide as={Center} bg='secondary'>
            2
          </CarouselSlide>
          <CarouselSlide as={Center} bg='warning'>
            3
          </CarouselSlide>
          <CarouselSlide as={Center} bg='danger'>
            4
          </CarouselSlide>
        </Carousel>
      </Box>
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
    </>
  );
}
