# useLazyMemo

A React hook that lazily computes a value only when accessed, and automatically re-renders once the value is resolved or dependencies change. This is ideal for expensive computations that should be deferred until needed.

## Overview

`useLazyMemo` efficiently computes values only when required, avoiding unnecessary calculations on every render. It automatically recomputes when dependencies change, making it perfect for scenarios where performance and resource management are critical.

## Import

```tsx
import { useLazyMemo } from "react-performify";
```

## Example

```tsx
import React, { useState } from "react";
import { useLazyMemo } from "react-performify";

function ExpensiveCalculation({ value }) {
  const result = useLazyMemo(() => {
    // Simulate expensive computation
    return value * 2;
  }, [value]);

  return <div>Result: {result}</div>;
}

// Usage
function App() {
  const [num, setNum] = useState(10);
  return (
    <div>
      <ExpensiveCalculation value={num} />
      <button onClick={() => setNum(n => n + 1)}>Increment</button>
    </div>
  );
}
```

## API Reference

| Parameter | Type     | Description |
|-----------|----------|-------------|
| factory   | Function | Computes the value. |
| deps      | any[]    | Dependency array. |

Returns: Lazily computed value.

## Implementation

```tsx
import { useRef, useState, useEffect } from "react";

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
```

## Notes

- Triggers re-render after value is computed.
- Recomputes when dependencies change.
- Avoids unnecessary computations for expensive values.

## Type Definition

```tsx
function useLazyMemo<T>(factory: () => T, deps: any[]): T
```

## Summary

Compute values lazily and efficiently in React, optimizing resource usage and performance for expensive calculations.
