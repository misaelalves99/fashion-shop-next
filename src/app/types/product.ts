// src/types/product.ts

import { StaticImageData } from 'next/image';

export interface Product {
  id: number;
  img: StaticImageData;
  title: string;
  rating: string;
  priceOld: number;
  discount: string;
  price: number; 
  category: string;
}

export interface ProductCardProps {
  product: Product;
}
