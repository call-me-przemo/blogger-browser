import { createBrowserRouter } from "react-router";
import { RootPage } from "./pages/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
]);
