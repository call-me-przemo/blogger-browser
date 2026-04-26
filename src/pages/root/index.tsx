import { Flex, Text, Button } from "@radix-ui/themes";

export function RootPage() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button variant="outline">Let's go</Button>
    </Flex>
  );
}
