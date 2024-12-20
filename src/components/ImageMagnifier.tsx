import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageMagnifierProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function ImageMagnifier({ src, alt, width, height }: ImageMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;

    const elem = imgRef.current;
    const { left, top, width, height } = elem.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setMagnifierPosition({ x, y });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseMove}
      >
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <AnimatePresence>
        {showMagnifier && (
          <motion.div
            className="hidden md:block relative rounded-lg overflow-hidden bg-white shadow-lg"
            style={{ aspectRatio: '1/1' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div
              className="absolute w-full h-full"
              style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: `${magnifierPosition.x}% ${magnifierPosition.y}%`,
                backgroundSize: '200%',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}