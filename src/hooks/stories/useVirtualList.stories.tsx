// src/hooks/useVirtualList.storybook.tsx
import React, { useState, useRef, useEffect } from "react";
import { Meta } from "@storybook/react";
import { useVirtualList } from "../useVirtualList";
import { motion } from "framer-motion";

export default {
    title: "Hooks/useVirtualList",
    parameters: { layout: "centered" },
} as Meta;

export const VirtualListDemo = () => {
    const totalItems = 1000;
    const itemHeight = 50;
    const viewportHeight = 400;

    // Create 1000 mock items
    const items = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);

    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollTop, setScrollTop] = useState(0);

    const { visibleItems, startOffset } = useVirtualList(items, {
        itemHeight,
        height: viewportHeight,
        scrollTop,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                setScrollTop(containerRef.current.scrollTop);
            }
        };

        const container = containerRef.current;
        container?.addEventListener("scroll", handleScroll);

        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            style={{
                fontFamily: "Inter, sans-serif",
                width: 320,
                border: "1px solid #475569",
                borderRadius: 12,
                overflow: "hidden",
                background: "#0f172a",
                color: "#f8fafc",
            }}
        >
            <h3
                style={{
                    padding: "12px 16px",
                    margin: 0,
                    background: "#1e293b",
                    borderBottom: "1px solid #475569",
                    fontWeight: 600,
                    textAlign: "center",
                }}
            >
                🧮 useVirtualList Demo
            </h3>

            <div
                ref={containerRef}
                style={{
                    height: viewportHeight,
                    overflowY: "auto",
                    position: "relative",
                    background: "#0f172a",
                }}
            >
                {/* Placeholder total height */}
                <div
                    style={{
                        height: totalItems * itemHeight,
                        position: "relative",
                    }}
                >
                    <motion.div
                        style={{
                            position: "absolute",
                            top: startOffset,
                            left: 0,
                            right: 0,
                        }}
                        layout
                    >
                        {visibleItems.map((item, i) => (
                            <div
                                key={item}
                                style={{
                                    height: itemHeight - 4,
                                    lineHeight: `${itemHeight - 4}px`,
                                    margin: "2px 8px",
                                    borderRadius: 6,
                                    paddingLeft: 8,
                                    background:
                                        i % 2 === 0
                                            ? "rgba(56, 189, 248, 0.1)"
                                            : "rgba(56, 189, 248, 0.2)",
                                    border: "1px solid rgba(56, 189, 248, 0.3)",
                                    color: "#38bdf8",
                                    fontSize: 14,
                                    fontWeight: 500,
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div
                style={{
                    borderTop: "1px solid #475569",
                    padding: "8px 16px",
                    background: "#1e293b",
                    fontSize: 13,
                    color: "#94a3b8",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div>Scroll: {Math.round(scrollTop)}px</div>
                <div>Visible: {visibleItems.length}</div>
            </div>
        </div>
    );
};
