import { Flex } from "@radix-ui/themes";
import { Outlet } from "react-router";

export function Navbar() {
  return (
    <>
      <Flex style={{ backgroundColor: "var(--accent-4)" }}>
        This will be navbar component
      </Flex>
      <Outlet />
    </>
  );
}
