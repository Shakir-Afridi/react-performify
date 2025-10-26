# useVirtualList

A React hook that efficiently renders only a subset of a large list based on scroll position, dramatically improving performance for long lists.

## Overview

`useVirtualList` implements windowing for large lists by calculating which items are visible in the viewport and only rendering those. This reduces DOM node count and memory usage, resulting in smoother scrolling and faster rendering, especially for lists with thousands of items.

## Import

```tsx
import { useVirtualList } from "react-performify";
```

## Example

```tsx
import React, { useRef, useState } from "react";
import { useVirtualList } from "react-performify";

function VirtualList({ items }) {
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const { visibleItems, startOffset } = useVirtualList(items, {
    itemHeight: 40,
    height: 400,
    scrollTop,
  });

  return (
    <div
      ref={containerRef}
      style={{ height: 400, overflowY: "auto", position: "relative" }}
      onScroll={e => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: items.length * 40, position: "relative" }}>
        <div style={{ position: "absolute", top: startOffset }}>
          {visibleItems.map((item, idx) => (
            <div key={startOffset + idx} style={{ height: 40 }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Usage
function App() {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  return <VirtualList items={items} />;
}
```

## API Reference

| Parameter | Type | Description |
|-----------|------|-------------|
| items     | array | The full list of items. |
| options   | object | `{ itemHeight: number, height: number, scrollTop: number }` |

Returns: `{ visibleItems: T[], startOffset: number }`

## Implementation

```tsx
import { useMemo } from "react";

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
```

## Notes

- Only the visible portion of the list is rendered.
- Great for chat apps, feeds, or any large dataset.
- Works with fixed item heights.

## Type Definition

```tsx
function useVirtualList<T>(
    items: T[],
    options: { itemHeight: number; height: number; scrollTop: number }
): { visibleItems: T[]; startOffset: number }
```

## Summary

Efficiently render large lists by windowing visible items, reducing memory and improving scroll performance in React.
