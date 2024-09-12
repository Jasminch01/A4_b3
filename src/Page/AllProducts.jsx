import { useState } from "react";
import Container from "../Components/Container";
import ProductCard from "../Components/ProductCard";

const products = [
  {
    id: 1,
    name: "Adidas Football",
    category: "Sports",
    stockQuantity: 10,
    brand: "Adidas",
    rating: 4.5,
    description: "A high-quality football suitable for professional matches.",
    price: 29.99,
    image:
      "https://media.karousell.com/media/photos/products/2020/8/10/adidas_conext15omb_1597035166_2aa354b4_progressive.jpg",
  },
  {
    id: 2,
    name: "Nike Basketball",
    category: "Sports",
    stockQuantity: 5,
    brand: "Nike",
    rating: 4.8,
    description: "Durable basketball for both indoor and outdoor use.",
    price: 39.99,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0b3db21c-204c-4b52-91c8-6a04a40aaea8/NK+ELT+ALL+COURT+8P+2.0.png",
  },
  {
    id: 3,
    name: "Wilson Tennis Racket",
    category: "Tennis",
    stockQuantity: 0,
    brand: "Wilson",
    rating: 4.2,
    description: "Lightweight racket ideal for all skill levels.",
    price: 59.99,
    image: "https://www.directtennis.co.uk/images/extralarge/Wil_WR055910.jpg",
  },
  {
    id: 4,
    name: "Puma Running Shoes",
    category: "Footwear",
    stockQuantity: 25,
    brand: "Puma",
    rating: 4.7,
    description: "Comfortable running shoes for daily use.",
    price: 79.99,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/377758/01/sv01/fnd/PNA/fmt/png/ForeverRUN-NITRO%E2%84%A2-Women's-Running-Shoes",
  },
  {
    id: 5,
    name: "Under Armour Sportswear",
    category: "Clothing",
    stockQuantity: 50,
    brand: "Under Armour",
    rating: 4.3,
    description: "Lightweight and breathable sportswear for all activities.",
    price: 49.99,
    image:
      "https://fighterxfashion.com/wp-content/uploads/2011/08/under-armour-reversible-shirt-yellow.jpg",
  },
  {
    id: 6,
    name: "Yonex Badminton Racket",
    category: "Badminton",
    stockQuantity: 8,
    brand: "Yonex",
    rating: 4.6,
    description: "Professional-grade badminton racket for advanced players.",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/91Lu9brnTNL._AC_SL1500_.jpg",
  },
];

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle filters and sorting
  const handleFilters = () => {
    let updatedProducts = products;

    // Search by name
    if (searchTerm) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (categoryFilter) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === categoryFilter
      );
    }

    // Filter by brand
    if (brandFilter) {
      updatedProducts = updatedProducts.filter(
        (product) => product.brand === brandFilter
      );
    }

    // Filter by rating
    if (ratingFilter) {
      updatedProducts = updatedProducts.filter(
        (product) => product.rating >= parseFloat(ratingFilter)
      );
    }

    // Sort by price
    if (priceSort === "asc") {
      updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
    } else if (priceSort === "desc") {
      updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchTerm("");
    setCategoryFilter("");
    setBrandFilter("");
    setRatingFilter("");
    setPriceSort("");
    setFilteredProducts(products);
  };

  return (
    <div className="my-20">
      <Container>
        {/* Filters Section */}
        <div className="mb-10">
          <div className="mb-5 flex text-center items-center justify-center">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 mr-2 w-[30rem]"
            />
            <button
              onClick={() => handleFilters()}
              className="px-5 py-2 bg-black text-white"
            >
              search
            </button>
          </div>
          <div className="flex justify-center">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border p-2 mr-2"
            >
              <option value="">All Categories</option>
              <option value="Sports">Sports</option>
              <option value="Tennis">Tennis</option>
              <option value="Footwear">Footwear</option>
              <option value="Clothing">Clothing</option>
              <option value="Badminton">Badminton</option>
            </select>
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="border p-2 mr-2"
            >
              <option value="">All Brands</option>
              <option value="Adidas">Adidas</option>
              <option value="Nike">Nike</option>
              <option value="Wilson">Wilson</option>
              <option value="Puma">Puma</option>
              <option value="Under Armour">Under Armour</option>
              <option value="Yonex">Yonex</option>
            </select>
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="border p-2 mr-2"
            >
              <option value="">All Ratings</option>
              <option value="4">4 Stars & up</option>
              <option value="4.5">4.5 Stars & up</option>
            </select>
            <select
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value)}
              className="border p-2 mr-2"
            >
              <option value="">Sort by Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
            <button
              className="bg-black text-white p-2 rounded"
              onClick={handleFilters}
            >
              Apply Filters
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded ml-2"
              onClick={handleResetFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
