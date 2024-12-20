import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ShopifyProduct } from '@/lib/types';
import { ProductCard } from './ProductCard';
import { ProductFilters, FilterOptions } from './ProductFilters';
import { BsFillGrid1X2Fill, BsFillGrid3X2GapFill } from 'react-icons/bs';
import { TfiLayoutGrid2Alt } from 'react-icons/tfi';

interface ProductGridProps {
  products: ShopifyProduct[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 1000],
    search: '',
    tags: [],
  });

  const [columns, setColumns] = useState(4); // Default to 4 columns

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const price = parseFloat(product.priceRange.minVariantPrice.amount);
      const matchesPrice = price >= filters.priceRange[0] && price <= filters.priceRange[1];
      const matchesSearch =
        product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase());
      const matchesTags =
        filters.tags.length === 0 ||
        filters.tags.some((tag) => product.tags.includes(tag));
      return matchesPrice && matchesSearch && matchesTags;
    });
  }, [products, filters]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        {/* Filters Section */}
        <ProductFilters onFilterChange={setFilters} minPrice={0} maxPrice={1000} />

        {/* Grid Options Section */}
        <div className="flex items-center gap-2">
          {/* Grid Layout Buttons */}
          {[
            { cols: 2, icon: <BsFillGrid1X2Fill /> }, // Icon for 2-column grid
            { cols: 4, icon: <TfiLayoutGrid2Alt /> }, // Icon for 4-column grid
            { cols: 6, icon: <BsFillGrid3X2GapFill /> }, // Icon for 6-column grid
          ].map((option) => (
            <button
              key={option.cols}
              className={`p-2 border rounded ${
                columns === option.cols ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
              onClick={() => setColumns(option.cols)}
            >
              {option.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <motion.div
        className={`grid gap-6 ${
          columns === 2
            ? 'grid-cols-2'
            : columns === 4
            ? 'grid-cols-4'
            : 'grid-cols-6'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </div>
  );
}
