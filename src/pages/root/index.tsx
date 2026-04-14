import { Button } from "@/components/ui/button";
import { useKeydown } from "@/hooks";
import { useImmer } from "use-immer";

export function RootPage() {
  const [count, setCount] = useImmer(0);
  useKeydown((e) => {
    switch (e.key) {
      case "-":
        setCount((c) => --c);
        break;
      case "+":
        setCount((c) => ++c);
        break;
      case "r":
        setCount(0);
        break;
    }
  });

  return (
    <main className="p-4 flex gap-4 items-center bg-stone-700">
      <Button className="cursor-pointer" onClick={() => setCount((c) => ++c)}>
        Click me !!!
      </Button>
      <p className="text-yellow-600">You have clicked button {count} times</p>
    </main>
  );
}
