# usePerformanceMonitor

A React hook that monitors FPS and render duration for a named React component, providing granular performance insights for profiling and optimization.

## Overview

`usePerformanceMonitor` tracks how often a component renders and how long each render takes. This is valuable for profiling specific components, identifying bottlenecks, and optimizing rendering logic in complex applications.

## Import

```tsx
import { usePerformanceMonitor } from "react-performify";
```

## Example

```tsx
import React from "react";
import { usePerformanceMonitor } from "react-performify";

function MonitoredComponent() {
  const stats = usePerformanceMonitor("MonitoredComponent", 500);
  return (
    <div>
      <div>Name: {stats.name}</div>
      <div>FPS: {stats.fps}</div>
      <div>Render Duration: {stats.duration} ms</div>
    </div>
  );
}
```

## API Reference

| Parameter   | Type     | Description |
|-------------|----------|-------------|
| name        | string   | Name for the monitor. |
| refreshRate | number   | How often to update stats (ms). |

Returns: `{ name: string, fps: number, duration: number }`

## Implementation

```tsx
import { useState, useEffect, useRef } from "react";

export function usePerformanceMonitor(name: string, refreshRate = 500) {
    const [metrics, setMetrics] = useState<{ fps: number; duration: number }>({
        fps: 0,
        duration: 0,
    });

    const frameCount = useRef(0);
    const lastTime = useRef(performance.now());

    useEffect(() => {
        let animationFrame: number;
        let lastUpdate = performance.now();

        const update = (time: number) => {
            frameCount.current++;
            const delta = time - lastTime.current;

            // Calculate every second (FPS)
            if (delta >= 1000) {
                const fps = (frameCount.current * 1000) / delta;
                setMetrics({ fps, duration: delta });
                frameCount.current = 0;
                lastTime.current = time;
            }

            // Throttle UI updates
            if (time - lastUpdate >= refreshRate) {
                lastUpdate = time;
                setMetrics((prev) => ({ ...prev }));
            }

            animationFrame = requestAnimationFrame(update);
        };

        animationFrame = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrame);
    }, [refreshRate]);

    return { name, ...metrics };
}
```

## Notes

- Useful for custom dashboards or logging.
- Duration is in ms.
- Helps pinpoint slow renders and optimize component performance.

## Type Definition

```tsx
function usePerformanceMonitor(
    name: string,
    refreshRate?: number
): { name: string; fps: number; duration: number }
```

## Summary

Profile FPS and render duration for any React component, enabling targeted performance improvements and diagnostics.
