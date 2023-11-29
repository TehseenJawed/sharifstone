import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "../Screens/Home";
import Layout from "../utils/Layout";
import OurCollection from '../Screens/Our_Collection'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Layout>
          <OurCollection />
        </Layout>
      }
    >
      <Route  path="/quartz-collection" element={<OurCollection />} />
    </Route>
  )
);

export { router };
