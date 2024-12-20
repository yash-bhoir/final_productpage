import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShopifyProduct } from '@/lib/types';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number>();

  const images = [
    product.featuredImage,
    ...product.images.edges.map(edge => edge.node)
  ];

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = window.setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, images.length]);

  return (
    <motion.div
      className="group relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      <Link to={`/products/${product.handle}`}>
        <div className="relative aspect-square overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentImageIndex].url}
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].altText}
              className="object-cover w-full h-full"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: isHovered ? 1.1 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          
          {/* Quick Info Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm">4.5 (120 reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {product.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">
            ${product.priceRange.minVariantPrice.amount}
          </span>
          <Button
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}