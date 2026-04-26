import { Container, Flex } from "@radix-ui/themes";
import { Outlet } from "react-router";

export function Navbar() {
  return (
    <Container>
      <Flex style={{ backgroundColor: "var(--accent-5)" }}>
        This will be navbar component
      </Flex>
      <Outlet />
    </Container>
  );
}
