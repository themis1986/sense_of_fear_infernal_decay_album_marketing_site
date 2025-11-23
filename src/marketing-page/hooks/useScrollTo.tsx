import { useCallback } from "react";

/**
 * useScrollTo hook
 * @param offset optional number to adjust scroll (e.g., sticky header height)
 */
export function useScrollTo(offset = 0) {
  /**
   * Scroll to an element by id or ref
   * @param target HTMLElement | string (id)
   */
  const scrollTo = useCallback(
    (target: HTMLElement | string) => {
      let element: HTMLElement | null = null;

      if (typeof target === "string") {
        element = document.getElementById(target);
      } else {
        element = target;
      }

      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    [offset]
  );

  return { scrollTo };
}
