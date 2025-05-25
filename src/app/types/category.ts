// src/types/category.ts

import { StaticImageData } from 'next/image';

export type Category = {
  id: string;
  title: string;
  img?: string | StaticImageData;
};
