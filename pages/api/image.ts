import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { NextApiRequest, NextApiResponse } from 'next';

const getDimensions = async (imagePath: string) => {
  const { width, height } = await sharp(imagePath).metadata();
  return { width, height };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const imagesDir = path.join(process.cwd(), 'public/img/gallery');
  const fileNames = fs.readdirSync(imagesDir);
  const images = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(imagesDir, fileName);
      const dimensions = await getDimensions(filePath);
      return {
        src: `/img/gallery/${fileName}`, // ここでsrcを使用する
        ...dimensions,
      };
    })
  );
  res.status(200).json(images);
}
