// src/hooks/useMemoizedCallback.ts
import { useCallback, useRef } from "react";
import isEqual from "fast-deep-equal";

/**
 * Returns a memoized callback that only updates when deep dependencies change.
 *
 * @example
 * const handler = useMemoizedCallback(() => fn(obj), [obj]);
 */
export function useMemoizedCallback<T extends (...args: any[]) => any>(
    callback: T,
    deps: any[]
): T {
    const lastDeps = useRef<any[]>([]);
    const lastCallback = useRef<T>(callback);

    if (!isEqual(deps, lastDeps.current)) {
        lastDeps.current = deps;
        lastCallback.current = callback;
    }

    return useCallback(
        ((...args: any[]) => lastCallback.current(...args)) as T,
        []
    );
}
