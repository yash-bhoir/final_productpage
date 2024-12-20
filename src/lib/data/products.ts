import { ShopifyProduct } from '@/lib/types';

export const products: ShopifyProduct[] = [
  {
    id: '1',
    handle: 'premium-leather-backpack',
    availableForSale: true,
    title: 'Premium Leather Backpack',
    description: 'Handcrafted from genuine leather, this versatile backpack combines style with functionality.',
    descriptionHtml: '<p>Handcrafted from genuine leather, this versatile backpack combines style with functionality.</p>',
    options: [
      {
        id: 'color',
        name: 'Color',
        values: ['Brown', 'Black', 'Tan']
      },
      {
        id: 'size',
        name: 'Size',
        values: ['Regular', 'Large']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '299.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '249.99', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: '1-1',
            title: 'Brown / Regular',
            availableForSale: true,
            selectedOptions: [
              { name: 'Color', value: 'Brown' },
              { name: 'Size', value: 'Regular' }
            ],
            price: { amount: '249.99', currencyCode: 'USD' }
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3',
      altText: 'Premium Leather Backpack',
      width: 1200,
      height: 1500
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3',
            altText: 'Premium Leather Backpack - Front',
            width: 1200,
            height: 1500
          }
        },
        {
          node: {
            url: 'https://images.unsplash.com/photo-1622560481316-6eafd83c2d17',
            altText: 'Premium Leather Backpack - Side',
            width: 1200,
            height: 1500
          }
        }
      ]
    },
    seo: {
      title: 'Premium Leather Backpack | Our Store',
      description: 'Handcrafted leather backpack perfect for daily use and travel.'
    },
    tags: ['leather', 'backpack', 'premium'],
    updatedAt: '2024-03-20T12:00:00Z'
  },
  {
    id: '2',
    handle: 'minimalist-watch',
    availableForSale: true,
    title: 'Minimalist Watch',
    description: 'Elegant timepiece with a clean design and premium materials.',
    descriptionHtml: '<p>Elegant timepiece with a clean design and premium materials.</p>',
    options: [
      {
        id: 'color',
        name: 'Color',
        values: ['Silver', 'Gold', 'Rose Gold']
      },
      {
        id: 'size',
        name: 'Size',
        values: ['38mm', '42mm']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '199.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '179.99', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: '2-1',
            title: 'Silver / 38mm',
            availableForSale: true,
            selectedOptions: [
              { name: 'Color', value: 'Silver' },
              { name: 'Size', value: '38mm' }
            ],
            price: { amount: '179.99', currencyCode: 'USD' }
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      altText: 'Minimalist Watch',
      width: 1200,
      height: 1500
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
            altText: 'Minimalist Watch - Front',
            width: 1200,
            height: 1500
          }
        },
        {
          node: {
            url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
            altText: 'Minimalist Watch - Side',
            width: 1200,
            height: 1500
          }
        }
      ]
    },
    seo: {
      title: 'Minimalist Watch | Our Store',
      description: 'Elegant timepiece with a clean design.'
    },
    tags: ['watch', 'minimalist', 'accessories'],
    updatedAt: '2024-03-20T12:00:00Z'
  },
  {
    id: '3',
    handle: 'wireless-earbuds',
    availableForSale: true,
    title: 'Premium Wireless Earbuds',
    description: 'High-quality wireless earbuds with active noise cancellation.',
    descriptionHtml: '<p>High-quality wireless earbuds with active noise cancellation.</p>',
    options: [
      {
        id: 'color',
        name: 'Color',
        values: ['White', 'Black', 'Navy']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '159.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '159.99', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: '3-1',
            title: 'White',
            availableForSale: true,
            selectedOptions: [
              { name: 'Color', value: 'White' }
            ],
            price: { amount: '159.99', currencyCode: 'USD' }
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
      altText: 'Premium Wireless Earbuds',
      width: 1200,
      height: 1500
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
            altText: 'Premium Wireless Earbuds - Front',
            width: 1200,
            height: 1500
          }
        },
        {
          node: {
            url: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86',
            altText: 'Premium Wireless Earbuds - Case',
            width: 1200,
            height: 1500
          }
        }
      ]
    },
    seo: {
      title: 'Premium Wireless Earbuds | Our Store',
      description: 'High-quality wireless earbuds with noise cancellation.'
    },
    tags: ['electronics', 'audio', 'wireless'],
    updatedAt: '2024-03-20T12:00:00Z'
  },
  {
    id: '4',
    handle: 'smart-water-bottle',
    availableForSale: true,
    title: 'Smart Water Bottle',
    description: 'Track your hydration with this smart water bottle featuring LED reminders.',
    descriptionHtml: '<p>Track your hydration with this smart water bottle featuring LED reminders.</p>',
    options: [
      {
        id: 'color',
        name: 'Color',
        values: ['Blue', 'Black', 'White']
      },
      {
        id: 'size',
        name: 'Size',
        values: ['17oz', '25oz']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '49.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '39.99', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: '4-1',
            title: 'Blue / 17oz',
            availableForSale: true,
            selectedOptions: [
              { name: 'Color', value: 'Blue' },
              { name: 'Size', value: '17oz' }
            ],
            price: { amount: '39.99', currencyCode: 'USD' }
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
      altText: 'Smart Water Bottle',
      width: 1200,
      height: 1500
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
            altText: 'Smart Water Bottle - Front',
            width: 1200,
            height: 1500
          }
        },
        {
          node: {
            url: 'https://images.unsplash.com/photo-1587496679742-bad502958fbf',
            altText: 'Smart Water Bottle - Side',
            width: 1200,
            height: 1500
          }
        }
      ]
    },
    seo: {
      title: 'Smart Water Bottle | Our Store',
      description: 'Smart water bottle with hydration tracking.'
    },
    tags: ['smart', 'hydration', 'fitness'],
    updatedAt: '2024-03-20T12:00:00Z'
  },
  {
    id: '5',
    handle: 'eco-friendly-yoga-mat',
    availableForSale: true,
    title: 'Eco-Friendly Yoga Mat',
    description: 'Sustainable cork yoga mat with natural rubber base for optimal grip.',
    descriptionHtml: '<p>Sustainable cork yoga mat with natural rubber base for optimal grip.</p>',
    options: [
      {
        id: 'thickness',
        name: 'Thickness',
        values: ['4mm', '6mm']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '89.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '79.99', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: '5-1',
            title: '4mm',
            availableForSale: true,
            selectedOptions: [
              { name: 'Thickness', value: '4mm' }
            ],
            price: { amount: '79.99', currencyCode: 'USD' }
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2',
      altText: 'Eco-Friendly Yoga Mat',
      width: 1200,
      height: 1500
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2',
            altText: 'Eco-Friendly Yoga Mat - Full',
            width: 1200,
            height: 1500
          }
        },
        {
          node: {
            url: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f',
            altText: 'Eco-Friendly Yoga Mat - Detail',
            width: 1200,
            height: 1500
          }
        }
      ]
    },
    seo: {
      title: 'Eco-Friendly Yoga Mat | Our Store',
      description: 'Sustainable cork yoga mat for eco-conscious practitioners.'
    },
    tags: ['yoga', 'eco-friendly', 'fitness'],
    updatedAt: '2024-03-20T12:00:00Z'
  }
];