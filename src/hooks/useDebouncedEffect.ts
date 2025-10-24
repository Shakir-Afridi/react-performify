// src/hooks/useDebouncedEffect.ts
import { useEffect } from "react";

/**
 * Triggers an effect after a specified delay.
 * The effect cancels if dependencies change within the delay window.
 *
 * @param {Function} effect - The effect callback.
 * @param {any[]} deps - Dependency list.
 * @param {number} delay - Delay in milliseconds.
 *
 * @example
 * useDebouncedEffect(() => fetchData(), [query], 300);
 */
export function useDebouncedEffect(
    effect: () => void | (() => void),
    deps: any[],
    delay: number
) {
    useEffect(() => {
        const handler = setTimeout(() => effect(), delay);
        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...(deps || []), delay]);
}
