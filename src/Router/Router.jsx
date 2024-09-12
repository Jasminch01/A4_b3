import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import App from "../App";
import About from "../Page/About";
import AllProducts from "../Page/AllProducts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/all-product',
        element : <AllProducts/>
      }
    ],
  },
]);

export default Router;
