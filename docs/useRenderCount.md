# useRenderCount

A React hook that tracks and returns how many times a component has rendered. This is useful for debugging and optimizing component render behavior.

## Overview

`useRenderCount` provides a simple way to monitor render frequency in your components. By exposing the render count, you can identify unnecessary renders and optimize your component logic, leading to better performance and reduced resource usage.

## Import

```tsx
import { useRenderCount } from "react-performify";
```

## Example

```tsx
import React, { useState } from "react";
import { useRenderCount } from "react-performify";

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRenderCount();

  return (
    <div>
      <div>Count: {count}</div>
      <div>Rendered: {renderCount} times</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
```

## API Reference

No parameters.

Returns: Number of times the component has rendered.

## Implementation

```tsx
import { useRef } from "react";

export function useRenderCount(): number {
    const count = useRef(1);
    count.current++;
    return count.current;
}
```

## Notes

- Increments on every render.
- Can be displayed in UI or logged.
- Useful for profiling and debugging render cycles.

## Type Definition

```tsx
function useRenderCount(): number
```

## Summary

Monitor component render frequency easily to identify and resolve unnecessary renders in your React applications.
