// src/hooks/useStableObject.ts
import { useRef } from "react";
import isEqual from "fast-deep-equal";

/**
 * Returns a stable reference for an object as long as its content is unchanged.
 *
 * @example
 * const stableFilter = useStableObject({ limit, sort });
 */
export function useStableObject<T extends Record<string, any>>(obj: T): T {
    const ref = useRef<T>(obj);
    if (!isEqual(ref.current, obj)) {
        ref.current = obj;
    }
    return ref.current;
}
