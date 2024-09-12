import Container from "../Container";

const Footer = () => {
  return (
    <div className="bg-black py-32">
      <Container>
        <footer className="text-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Store Information */}
            <div>
              <h4 className="text-xl font-bold mb-4">About Us</h4>
              <p className="text-sm mb-4">
                Your trusted destination for premium sports gear. Shop the best
                brands and gear for all your sports needs.
              </p>
              <p className="text-sm">
                <strong>Address:</strong> 123 Sports Avenue, Cityville, USA
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> +1 555 123 4567
              </p>
              <p className="text-sm">
                <strong>Email:</strong> support@sportstore.com
              </p>
            </div>

            {/* Customer Support */}
            <div>
              <h4 className="text-xl font-bold mb-4">Customer Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/shipping" className="hover:underline">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <p className="text-sm mb-4">
                Stay connected with us for exclusive offers and updates.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="hover:text-gray-400"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a
                  href="https://instagram.com"
                  className="hover:text-gray-400"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a
                  href="https://twitter.com"
                  className="hover:text-gray-400"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="text-center mt-32">
            <p className="text-sm">
              &copy; 2024 SportStore. All rights reserved.
            </p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
