# useDebouncedEffect

A React hook that triggers an effect after a specified delay, cancelling the effect if dependencies change before the delay completes. This is useful for debouncing side effects like API calls or expensive operations.

## Overview

`useDebouncedEffect` helps prevent excessive or redundant side effects by waiting for a period of inactivity before executing the effect. This is commonly used for search inputs, resize events, or any scenario where you want to limit how often an effect runs in response to rapid changes.

## Import

```tsx
import { useDebouncedEffect } from "react-performify";
```

## Example

```tsx
import React, { useState } from "react";
import { useDebouncedEffect } from "react-performify";

function SearchInput() {
  const [query, setQuery] = useState("");

  useDebouncedEffect(() => {
    // Simulate API call
    console.log("Searching for:", query);
  }, [query], 300);

  return (
    <input
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Type to search..."
    />
  );
}
```

## API Reference

| Parameter | Type     | Description |
|-----------|----------|-------------|
| effect    | Function | Effect callback. |
| deps      | any[]    | Dependency array. |
| delay     | number   | Delay in ms. |

Returns: void.

## Implementation

```tsx
import { useEffect } from "react";

export function useDebouncedEffect(
    effect: () => void | (() => void),
    deps: any[],
    delay: number
) {
    useEffect(() => {
        const handler = setTimeout(() => effect(), delay);
        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...(deps || []), delay]);
}
```

## Notes

- Effect is cancelled if dependencies change before delay.
- Useful for search, resize, etc.
- Reduces unnecessary network or computation load.

## Type Definition

```tsx
function useDebouncedEffect(
    effect: () => void | (() => void),
    deps: any[],
    delay: number
): void
```

## Summary

Debounce effects in React with a simple hook, improving responsiveness and reducing redundant operations.
