import { Link } from "react-router-dom";
import Container from "../Container";

const Navbar = () => {
  return (
    <div>
      <Container>
        <div
          className="
        flex items-center justify-between py-5"
        >
          <div>
            <Link to={'/'} className="text-2xl font-semibold">FITZONE</Link>
          </div>
          <div className="flex items-center space-x-5">
            <Link to={'/all-product'} className=" ">All Product</Link>
            <Link to={'/manage'} className=" ">Manage</Link>
            <Link to={'/cart'} className=" ">Cart</Link>
            <Link to={'/about'} className=" ">About us</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
