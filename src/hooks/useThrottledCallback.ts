// src/hooks/useThrottledCallback.ts
import { useCallback, useRef } from "react";

/**
 * Creates a throttled version of a callback function.
 *
 * @param {Function} callback - The function to throttle.
 * @param {number} delay - Minimum delay between calls.
 * @returns {Function} Throttled function.
 *
 * @example
 * const handleScroll = useThrottledCallback(() => { ... }, 200);
 */
export function useThrottledCallback<T extends (...args: any[]) => any>(
    callback: T,
    delay: number
): T {
    const lastCalled = useRef(0);

    return useCallback(
        (...args: any[]) => {
            const now = Date.now();
            if (now - lastCalled.current >= delay) {
                lastCalled.current = now;
                callback(...args);
            }
        },
        [callback, delay]
    ) as T;
}
