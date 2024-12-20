export type Money = {
  amount: string;
  currencyCode: string;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type Connection<T> = {
  edges: { node: T }[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type ProductImage = {
  url: string;
  altText: string;
  width?: number;
  height?: number;
};

export type SEO = {
  title: string;
  description: string;
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: ProductImage;
  images: Connection<ProductImage>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
};