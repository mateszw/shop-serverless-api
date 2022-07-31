export interface ProductDetails {
  id: string;
  title: string;
  description: number;
}

interface ProductStock {
  count: number;
}

export type Product = ProductDetails & ProductStock;
