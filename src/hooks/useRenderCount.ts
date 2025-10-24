// src/hooks/useRenderCount.ts
import { useRef } from "react";

/**
 * Tracks and returns how many times a component has rendered.
 * Useful for debugging unnecessary re-renders.
 *
 * @returns {number} The current render count.
 *
 * @example
 * const renderCount = useRenderCount();
 * console.log(`Rendered ${renderCount} times`);
 */
export function useRenderCount(): number {
    const count = useRef(1);
    count.current++;
    return count.current;
}
