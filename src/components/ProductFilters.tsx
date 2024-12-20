import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Filter, SlidersHorizontal } from 'lucide-react';

interface ProductFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
  minPrice: number;
  maxPrice: number;
}

export interface FilterOptions {
  priceRange: [number, number];
  search: string;
  tags: string[];
}

export function ProductFilters({ onFilterChange, minPrice, maxPrice }: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [minPrice, maxPrice],
    search: '',
    tags: [],
  });

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="mb-8">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4"
      >
        <SlidersHorizontal className="w-4 h-4 mr-2" />
        Filters
      </Button>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="space-y-6 bg-white p-6 rounded-lg shadow-md"
        >
          <div>
            <Label>Search</Label>
            <Input
              type="text"
              placeholder="Search products..."
              value={filters.search}
              onChange={(e) => handleFilterChange({ search: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Price Range</Label>
            <div className="mt-2">
              <Slider
                min={minPrice}
                max={maxPrice}
                step={1}
                value={filters.priceRange}
                onValueChange={(value) => handleFilterChange({ priceRange: value as [number, number] })}
                className="mt-2"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div>
            <Label>Categories</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {['electronics', 'accessories', 'fitness', 'eco-friendly'].map((tag) => (
                <Button
                  key={tag}
                  variant={filters.tags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    const newTags = filters.tags.includes(tag)
                      ? filters.tags.filter((t) => t !== tag)
                      : [...filters.tags, tag];
                    handleFilterChange({ tags: newTags });
                  }}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}