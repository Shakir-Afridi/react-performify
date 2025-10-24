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
