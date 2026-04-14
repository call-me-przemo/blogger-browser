import { useEffect, useEffectEvent } from "react";

export function useKeydown(handler: (e: KeyboardEvent) => void) {
  const cb = useEffectEvent(handler);

  useEffect(() => {
    addEventListener("keydown", cb);

    return () => removeEventListener("keydown", cb);
  }, []);
}
