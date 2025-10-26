# useThrottledCallback

A React hook that creates a throttled version of a callback function, ensuring the function is not called more frequently than a specified interval. This helps prevent performance bottlenecks caused by rapid event firing.

## Overview

`useThrottledCallback` is ideal for scenarios where you want to limit how often a function executes, such as handling scroll, resize, or mouse move events. By throttling the callback, you reduce unnecessary computations and improve UI responsiveness, especially in high-frequency event situations.

## Import

```tsx
import { useThrottledCallback } from "react-performify";
```

## Example

```tsx
import React from "react";
import { useThrottledCallback } from "react-performify";

function ScrollLogger() {
  const handleScroll = useThrottledCallback(() => {
    console.log("Scroll event at", window.scrollY);
  }, 200);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return <div style={{ height: "200vh" }}>Scroll down!</div>;
}
```

## API Reference

| Parameter | Type | Description |
|-----------|------|-------------|
| callback  | Function | The function to throttle. |
| delay     | number   | Minimum delay between calls (ms). |

Returns: Throttled function.

## Implementation

```tsx
import { useCallback, useRef } from "react";

export function useThrottledCallback<T extends (...args: any[]) => any>(
    callback: T,
    delay: number
): T {
    const lastCalled = useRef(0);

    return useCallback(
        (...args: any[]) => {
            const now = Date.now();
            if (now - lastCalled.current >= delay) {
                lastCalled.current = now;
                callback(...args);
            }
        },
        [callback, delay]
    ) as T;
}
```

## Notes

- Useful for scroll, resize, or other frequent events.
- Ensures callback is not called more often than `delay`.
- Prevents UI jank and excessive computations.

## Type Definition

```tsx
function useThrottledCallback<T extends (...args: any[]) => any>(
    callback: T,
    delay: number
): T
```

## Summary

Throttle any callback in React with a simple hook to optimize performance and avoid excessive event handling.
