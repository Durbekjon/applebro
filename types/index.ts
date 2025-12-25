export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  specs: string;
  category: string;
  colors?: string[];
  storage?: string[];
  memory?: string[];
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count?: number;
}
