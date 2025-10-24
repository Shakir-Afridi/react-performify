// src/hooks/useWhyDidYouRender.ts
import { useEffect, useRef } from "react";

/**
 * Logs which props have changed between renders.
 * Helps identify unnecessary re-renders.
 *
 * @param {Record<string, any>} props - The component props to track.
 * @param {string} name - (optional) Component name for clearer logs.
 *
 * @example
 * useWhyDidYouRender(props, "UserCard");
 */
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
