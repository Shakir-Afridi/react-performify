// src/hooks/useVirtualList.ts
import { useMemo } from "react";

/**
 * Renders only a subset of a large list based on scroll position.
 *
 * @example
 * const { visibleItems, startOffset } = useVirtualList(items, { itemHeight: 40, height: 400, scrollTop });
 */
export function useVirtualList<T>(
    items: T[],
    options: { itemHeight: number; height: number; scrollTop: number }
) {
    const { itemHeight, height, scrollTop } = options;

    return useMemo(() => {
        const start = Math.floor(scrollTop / itemHeight);
        const end = Math.min(
            items.length - 1,
            Math.floor((scrollTop + height) / itemHeight)
        );
        const visibleItems = items.slice(start, end + 1);
        const startOffset = start * itemHeight;
        return { visibleItems, startOffset };
    }, [items, itemHeight, height, scrollTop]);
}
