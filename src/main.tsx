import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import "@radix-ui/themes/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <Theme accentColor="teal" radius="small">
        <RouterProvider router={router} />
        <ThemePanel />
      </Theme>
    </ThemeProvider>
  </StrictMode>,
);
