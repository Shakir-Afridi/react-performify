import { useRef, useState, useEffect } from "react";

/**
 * useLazyMemo
 *
 * Lazily computes a value only when accessed, re-renders automatically once resolved.
 * Recomputes when dependencies change.
 *
 * @param factory Function that computes the value
 * @param deps Dependency array
 * @returns Lazily computed value
 */
export function useLazyMemo<T>(factory: () => T, deps: any[]): T {
    const [, forceUpdate] = useState({});
    const ref = useRef<{ deps: any[]; value?: T }>({ deps, value: undefined });

    const depsChanged =
        deps.length !== ref.current.deps.length ||
        deps.some((d, i) => d !== ref.current.deps[i]);

    useEffect(() => {
        if (depsChanged) {
            ref.current = { deps, value: undefined };
            // Trigger re-render to allow fresh computation on next access
            forceUpdate({});
        }
    }, [depsChanged, deps]);

    if (ref.current.value === undefined) {
        ref.current.value = factory();
        // Force re-render once value is computed
        forceUpdate({});
    }

    return ref.current.value!;
}
