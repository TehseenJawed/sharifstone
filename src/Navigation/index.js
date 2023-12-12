import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "../Screens/Home";
import Layout from "../utils/Layout";
import OurCollection from "../Screens/Our_Collection";
import ProductDescription from "../Screens/ProductDescription";
import AboutUs from "../Screens/AboutUs";
import WarrantyAndSupport from "../Screens/WarrantyAndSupport";
import ContactScreen from "../Screens/Contact";
import KitchenVisualizer from "../Screens/KitchenVisualizer";
import Login from "../Screens/Login/Login";
import Dashboard from "../Screens/Dashboard/Dashboard";
import CreateCollection from "../Screens/Dashboard/Dashboard";

createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Layout>
          <HomeScreen />
        </Layout>
      ),
    },
    {
      path: "/quartz-collection",
      element: (
        <Layout>
          <OurCollection />
        </Layout>
      ),
    },
    {
      path: "/product-description",
      element: (
        <Layout>
          <ProductDescription />
        </Layout>
      ),
    },
    {
      path: "/kitchen-visualizer",
      element: (
        // <Layout>
          <KitchenVisualizer />
        // </Layout>
      ),
    },
    {
      path: "/about",
      element: (
        <Layout>
          <AboutUs />
        </Layout>
      ),
    },
    {
      path: "/warranty-n-support",
      element: (
        <Layout>
          <WarrantyAndSupport />
        </Layout>
      ),
    },
    {
        path: "/contact",
        element: (
          <Layout>
            <ContactScreen />
          </Layout>
        ),
      },
      {
        path: "/login",
        element: (
          <Layout>
            <Login />
          </Layout>
        ),
      },
      {
        path: "/admin-dashboard",
        element: (
          <Layout>
            <Dashboard />
          </Layout>
        ),
      },
      {
        path: "/admin-dashboard/create-collection",
        element: (
          <Layout>
            <Dashboard />
          </Layout>
        ),
      },
  ]
  //   createRoutesFromElements(
  // <Route
  //   path="/"
  //   element={
  //     <Layout>
  //       <ContactScreen />
  //     </Layout>
  //   }
  // >
  //   <Route  path="/quartz-collection" element={<OurCollection />} />
  // </Route>
  //   )
);

export { router };
