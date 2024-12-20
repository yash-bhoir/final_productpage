import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShopifyProduct } from '@/lib/types';
import { ImageMagnifier } from './ImageMagnifier';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductDetailsProps {
  product: ShopifyProduct;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.edges[0].node
  );
  const [selectedImage, setSelectedImage] = useState(product.featuredImage);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <Link to="/">
          <Button variant="outline" size="sm">
            <Grid className="w-4 h-4 mr-2" />
            View All Products
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-1 order-2 md:order-1">
          <div className="flex flex-row md:flex-col gap-2">
            {product.images.edges.map(({ node: image }) => (
              <motion.div
                key={image.url}
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.altText}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:col-span-6 order-1 md:order-2">
          <ImageMagnifier
            src={selectedImage.url}
            alt={selectedImage.altText}
            width={selectedImage.width}
            height={selectedImage.height}
          />
        </div>

        <motion.div
          className="md:col-span-5 space-y-6 order-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-2xl font-semibold text-blue-600">
              ${selectedVariant.price.amount}
            </p>
          </div>

          <div
            className="prose prose-sm"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />

          <div className="space-y-4">
            {product.options.map((option) => (
              <div key={option.id}>
                <h3 className="text-sm font-medium mb-2">{option.name}</h3>
                <div className="flex gap-2">
                  {option.values.map((value) => (
                    <Button
                      key={value}
                      variant="outline"
                      size="sm"
                      className="min-w-[4rem]"
                      onClick={() => {
                        // Handle variant selection
                      }}
                    >
                      {value}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Button className="flex-1">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline">
              <Heart className="w-4 h-4" />
            </Button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="space-y-2 text-sm">
              {product.tags.map((tag) => (
                <li key={tag} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}