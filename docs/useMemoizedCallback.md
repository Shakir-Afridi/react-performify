# useMemoizedCallback

A React hook that returns a memoized callback which only updates when deep dependencies change, ensuring stable function references for complex dependency arrays.

## Overview

`useMemoizedCallback` is useful when your callback depends on objects or arrays that may be recreated frequently. By using deep equality checks, it prevents unnecessary callback recreation and helps maintain optimal performance in memoized components and hooks.

## Import

```tsx
import { useMemoizedCallback } from "react-performify";
```

## Example

```tsx
import React, { useState } from "react";
import { useMemoizedCallback } from "react-performify";

function FilterButton({ filter }) {
  const handleClick = useMemoizedCallback(() => {
    alert(`Filter: ${JSON.stringify(filter)}`);
  }, [filter]);

  return <button onClick={handleClick}>Show Filter</button>;
}

// Usage
function App() {
  const [filter, setFilter] = useState({ limit: 10, sort: "asc" });
  return <FilterButton filter={filter} />;
}
```

## API Reference

| Parameter | Type     | Description |
|-----------|----------|-------------|
| callback  | Function | The callback to memoize. |
| deps      | any[]    | Deep dependency array. |

Returns: Memoized callback.

## Implementation

```tsx
import { useCallback, useRef } from "react";
import isEqual from "fast-deep-equal";

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
```

## Notes

- Uses deep equality for dependencies.
- Prevents unnecessary callback recreation.
- Ideal for stable event handlers and memoized props.

## Type Definition

```tsx
function useMemoizedCallback<T extends (...args: any[]) => any>(
    callback: T,
    deps: any[]
): T
```

## Summary

Memoize callbacks with deep dependency checks to ensure stable references and efficient rendering in React.
