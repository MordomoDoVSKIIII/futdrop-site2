import React from 'react';

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  rating?: number;
  tag?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price, rating = 5, tag }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 group relative">
      <img src={image} alt={title} className="rounded-t-lg w-full h-72 object-cover" />
      <div className="p-4 text-center">
        <h3 className="font-heading text-lg">{title}</h3>
        <p className="text-yellow-500 mb-1">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</p>
        {tag && <p className="text-sm text-gray-500">{tag}</p>}
        <p className="font-semibold mt-2 text-primary">€{price.toFixed(2)}</p>
        <button className="opacity-0 group-hover:opacity-100 transition bg-primary text-white mt-4 px-4 py-2 rounded text-sm mx-auto block hover:bg-secondary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
