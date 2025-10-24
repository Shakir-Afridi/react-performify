import { useEffect, useRef } from "react";

/**
 * usePerformanceOverlay
 *
 * Displays a small on-screen performance overlay showing FPS and memory usage.
 * Ideal for developers debugging performance issues during development.
 *
 * @param {boolean} [enabled=true] - Whether the overlay should be active.
 * @param {number} [updateInterval=500] - How often (ms) to update FPS stats.
 * @param {"top-left" | "top-right" | "bottom-left" | "bottom-right"} [position="top-left"] - Overlay screen position.
 *
 * @example
 * usePerformanceOverlay(true, 500, "bottom-left");
 */
export function usePerformanceOverlay(
    enabled: boolean = true,
    updateInterval: number = 500,
    position:
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right" = "top-left"
) {
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const frameCount = useRef(0);
    const lastTime = useRef(performance.now());
    const fps = useRef(0);

    useEffect(() => {
        if (!enabled) {
            if (overlayRef.current) {
                overlayRef.current.remove();
                overlayRef.current = null;
            }
            return;
        }

        // Create overlay element
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.padding = "6px 10px";
        overlay.style.background = "rgba(0, 0, 0, 0.75)";
        overlay.style.color = "#00ff88";
        overlay.style.fontFamily = "monospace";
        overlay.style.fontSize = "12px";
        overlay.style.borderRadius = "6px";
        overlay.style.zIndex = "9999";
        overlay.style.pointerEvents = "none";

        // ✅ Position logic
        switch (position) {
            case "top-right":
                overlay.style.top = "10px";
                overlay.style.right = "10px";
                break;
            case "bottom-left":
                overlay.style.bottom = "10px";
                overlay.style.left = "10px";
                break;
            case "bottom-right":
                overlay.style.bottom = "10px";
                overlay.style.right = "10px";
                break;
            default:
                overlay.style.top = "10px";
                overlay.style.left = "10px";
                break;
        }

        document.body.appendChild(overlay);
        overlayRef.current = overlay;

        let animationFrameId: number;
        let intervalId: NodeJS.Timeout;

        const updateFPS = (now: number) => {
            frameCount.current++;
            const delta = now - lastTime.current;
            if (delta >= 1000) {
                fps.current = Math.round((frameCount.current * 1000) / delta);
                frameCount.current = 0;
                lastTime.current = now;
            }
            animationFrameId = requestAnimationFrame(updateFPS);
        };

        const updateOverlay = () => {
            const mem =
                (performance as any).memory?.usedJSHeapSize / (1024 * 1024) ||
                0;
            const memText = mem ? ` | Mem: ${mem.toFixed(1)} MB` : "";
            overlay.textContent = `FPS: ${fps.current}${memText}`;
        };

        animationFrameId = requestAnimationFrame(updateFPS);
        intervalId = setInterval(updateOverlay, updateInterval);

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearInterval(intervalId);
            overlay.remove();
            overlayRef.current = null;
        };
    }, [enabled, updateInterval, position]);
}
