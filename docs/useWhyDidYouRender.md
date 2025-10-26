# useWhyDidYouRender

A React hook that logs which props have changed between renders, helping you identify unnecessary re-renders and optimize your component's performance.

## Overview

`useWhyDidYouRender` is a developer tool for tracking prop changes in functional components. By logging the differences between previous and current props, it provides actionable insights into what triggers re-renders, making it easier to spot inefficiencies and improve your application's responsiveness.

## Import

```tsx
import { useWhyDidYouRender } from "react-performify";
```

## Example

```tsx
import React from "react";
import { useWhyDidYouRender } from "react-performify";

function UserCard(props) {
  useWhyDidYouRender(props, "UserCard");
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
}

// Usage
function App() {
  const [user] = React.useState({ name: "Alice", email: "alice@example.com" });
  return <UserCard {...user} />;
}
```

## API Reference

| Parameter | Type | Description |
|-----------|------|-------------|
| props     | object | The component props to track. |
| name      | string | (Optional) Component name for clearer logs. |

Returns: void.

## Implementation

```tsx
import { useEffect, useRef } from "react";

export function useWhyDidYouRender<T extends Record<string, any>>(
    props: T,
    name = "Component"
) {
    const previousProps = useRef<T | null>(null);

    useEffect(() => {
        if (previousProps.current) {
            const allKeys = Object.keys({ ...previousProps.current, ...props });
            const changes: Record<string, { from: any; to: any }> = {};

            allKeys.forEach((key) => {
                if (previousProps.current![key] !== props[key]) {
                    changes[key] = {
                        from: previousProps.current![key],
                        to: props[key],
                    };
                }
            });

            if (Object.keys(changes).length > 0) {
                console.log(`[${name}] changed:`, changes);
            }
        }
        previousProps.current = props;
    });
}
```

## Notes

- Only logs changes in shallow prop values.
- Useful for debugging and profiling React components.
- Does not prevent re-renders, only reports them.

## Type Definition

```tsx
function useWhyDidYouRender<T extends Record<string, any>>(
    props: T,
    name?: string
): void
```

## Summary

Track and log prop changes between renders to diagnose and optimize unnecessary re-renders in your React components.
