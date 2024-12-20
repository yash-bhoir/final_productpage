import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductDetails } from '@/components/ProductDetails';
import { products } from '@/lib/data/products';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<ProductGrid products={products} />} />
          <Route
            path="/products/:handle"
            element={
              <ProductDetails
                product={products[0]} // In a real app, find the product by handle
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;