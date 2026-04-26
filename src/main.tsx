import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme accentColor="amber" grayColor="mauve" radius="none">
      <RouterProvider router={router} />
      <ThemePanel />
    </Theme>
  </StrictMode>,
);
