# usePerformanceStats

A React hook that tracks browser performance metrics, including frames per second (FPS) and memory usage. This enables developers to monitor real-time performance directly within their components.

## Overview

`usePerformanceStats` provides live feedback on how smoothly your application is running and how much memory it is consuming. This is especially valuable for performance-sensitive applications, dashboards, or during development to catch bottlenecks and memory leaks early.

## Import

```tsx
import { usePerformanceStats } from "react-performify";
```

## Example

```tsx
import React from "react";
import { usePerformanceStats } from "react-performify";

function PerformancePanel() {
  const { fps, memory } = usePerformanceStats();
  return (
    <div>
      <div>FPS: {fps}</div>
      <div>Memory: {memory} MB</div>
    </div>
  );
}
```

## API Reference

No parameters.

Returns: `{ fps: number, memory: number }`

## Implementation

```tsx
import { useEffect, useState } from "react";

export function usePerformanceStats() {
    const [stats, setStats] = useState({ fps: 0, memory: 0 });

    useEffect(() => {
        let frameCount = 0;
        let lastTime = performance.now();
        let animationFrameId: number;

        const updateStats = () => {
            const now = performance.now();
            frameCount++;

            // Every second, update FPS and memory usage
            if (now - lastTime >= 1000) {
                const fps = frameCount;
                frameCount = 0;
                lastTime = now;

                const memoryInfo =
                    (performance as any).memory?.usedJSHeapSize ?? 0;
                const memoryInMB = memoryInfo ? memoryInfo / 1024 / 1024 : 0;

                setStats({
                    fps,
                    memory: Number(memoryInMB.toFixed(2)),
                });
            }

            animationFrameId = requestAnimationFrame(updateStats);
        };

        animationFrameId = requestAnimationFrame(updateStats);

        // Cleanup properly using the frame ID
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return stats;
}
```

## Notes

- Memory info only available in Chrome-based browsers.
- CPU metric is a placeholder.
- Useful for live dashboards and development overlays.

## Type Definition

```tsx
function usePerformanceStats(): { fps: number; memory: number }
```

## Summary

Get browser FPS and memory stats in React to monitor and optimize application performance in real time.
