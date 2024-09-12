import { Outlet } from "react-router-dom";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";

const Layout = () => {
  return (
    <div className="font-montserrot">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Layout;
