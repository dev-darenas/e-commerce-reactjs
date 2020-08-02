export interface ProductAttributes {
  name: string;
  description: string;
  slug: string;
}

export interface Product {
  id: number;
  type: string;
  attributes: ProductAttributes;
}
