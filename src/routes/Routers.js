/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { registerRoutes } from "./index";

import PageNotFound from "../views/PageNotFound";
import Layout from "../layouts/Layout";

const childRoutes = (routes) =>
  routes.map(({ path, id, component: Component }, index) => {
    const LayoutComponent = Layout;
    return (
      <Route
        key={id}
        path={path}
        exact
        element={
          <LayoutComponent>
            <Component />
          </LayoutComponent>
        }
      />
    );
  });

function Routers() {
  return (
    <Router>
      <Routes>
        {childRoutes(registerRoutes)}
        <Route
          path="*"
          element={<PageNotFound />} // For Page Not Found
        />
      </Routes>
    </Router>
  );
}

export default Routers;
