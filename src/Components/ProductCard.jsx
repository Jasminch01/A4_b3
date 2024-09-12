/* eslint-disable react/prop-types */
// Import react-rating for product rating
import { FaStar } from "react-icons/fa"; // Optionally use font awesome icons for stars
import Rating from "react-rating";

const ProductCard = ({ product }) => {
  const {
    name,
    category,
    stockQuantity,
    brand,
    rating,
    description,
    price,
    image,
  } = product;

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <div>
        <img className="w-full h-48 object-cover" src={image} alt={name} />
      </div>
      <div className="p-6">
        {/* Product Name */}
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        {/* Category */}
        <p className="text-sm text-gray-600 mb-1">Category: {category}</p>
        {/* Brand */}
        <p className="text-sm text-gray-600 mb-1">Brand: {brand}</p>
        {/* Stock Quantity */}
        <p className="text-sm text-gray-600 mb-1">
          {stockQuantity > 0 ? (
            <span className="text-green-600">In Stock ({stockQuantity})</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </p>
        {/* Rating */}
        <div className="mb-2">
          <Rating
            initialRating={rating}
            readonly
            emptySymbol={<FaStar className="text-gray-400" />}
            fullSymbol={<FaStar className="text-yellow-500" />}
          />
          <span className="ml-2 text-gray-600">({rating})</span>
        </div>
        {/* Description */}
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        {/* Price */}
        <p className="text-lg font-semibold text-gray-900 mb-4">${price}</p>
        {/* View Details Button */}
        <button className="bg-black text-white py-2 px-4 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
