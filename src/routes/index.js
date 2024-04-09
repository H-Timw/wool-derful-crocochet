import React from "react";
import { idRouter } from "./idRouter";

const HomePage = React.lazy(() => import("../views/HomePage"));

const homePage = {
  id: idRouter.homePage,
  path: `/${idRouter.homePage}`,
  component: HomePage,
  useMobileLayout: true,
};

export const registerRoutes = [homePage];
