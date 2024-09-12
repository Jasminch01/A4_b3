import Container from "../Container";
import ProductCard from "../ProductCard";
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
    image: "https://fighterxfashion.com/wp-content/uploads/2011/08/under-armour-reversible-shirt-yellow.jpg",
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

const Fetured = () => {
  return (
    <Container>
      <div className="my-20">
        <p className="text-3xl font-semibold">Fetured Product</p>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-10 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Fetured;
