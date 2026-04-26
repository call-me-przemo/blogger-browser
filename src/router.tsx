import { createBrowserRouter } from "react-router";
import { RootPage } from "./pages/root";
import { Navbar } from "./components";

export const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <RootPage />,
      },
    ],
  },
]);
