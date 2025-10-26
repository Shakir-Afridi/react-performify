# useStableObject

A React hook that returns a stable reference for an object as long as its deep contents remain unchanged. This helps prevent unnecessary re-renders and improves memoization.

## Overview

`useStableObject` deeply compares the provided object with its previous value and only updates the reference if the contents have changed. This is especially useful when passing objects as dependencies to hooks or props to memoized components, reducing unwanted renders and improving performance.

## Import

```tsx
import { useStableObject } from "react-performify";
```

## Example

```tsx
import React, { useState } from "react";
import { useStableObject } from "react-performify";

function FilterDisplay({ filter }) {
  const stableFilter = useStableObject(filter);
  return <pre>{JSON.stringify(stableFilter, null, 2)}</pre>;
}

// Usage
function App() {
  const [filter, setFilter] = useState({ limit: 10, sort: "asc" });
  return <FilterDisplay filter={filter} />;
}
```

## API Reference

| Parameter | Type | Description |
|-----------|------|-------------|
| obj       | object | The object to stabilize. |

Returns: Stable reference to the object.

## Implementation

```tsx
import { useRef } from "react";
import isEqual from "fast-deep-equal";

export function useStableObject<T extends Record<string, any>>(obj: T): T {
    const ref = useRef<T>(obj);
    if (!isEqual(ref.current, obj)) {
        ref.current = obj;
    }
    return ref.current;
}
```

## Notes

- Uses deep equality (`fast-deep-equal`) to compare objects.
- Helps with memoization and dependency arrays.
- Prevents unnecessary renders when object contents are unchanged.

## Type Definition

```tsx
function useStableObject<T extends Record<string, any>>(obj: T): T
```

## Summary

Keep object references stable unless their contents change, enabling more efficient React rendering and dependency management.
