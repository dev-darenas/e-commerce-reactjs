export interface ProductAttributes {
  name: string;
  description: string;
  slug: string;
  cost_price: string;
  whatsapp: string;
  variant_images: Array<string>;
  carousel: Array<string>;
}

export interface Product {
  id: number;
  type: string;
  attributes: ProductAttributes;
}
