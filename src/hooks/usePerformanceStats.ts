// src/hooks/usePerformanceStats.ts
import { useEffect, useState } from "react";

/**
 * Tracks browser performance metrics: FPS, memory usage, and CPU (placeholder).
 *
 * Returns:
 *  - fps: Frames per second
 *  - memory: Used JS heap size in MB (if available)
 *  - cpu: Placeholder (always 0 for now — browsers don’t expose CPU data)
 *
 * @example
 * const { fps, memory } = usePerformanceStats();
 * console.log(fps, "FPS", memory, "MB");
 */
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
