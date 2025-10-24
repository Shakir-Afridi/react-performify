// src/hooks/usePerformanceStats.storybook.tsx
import React from "react";
import { Meta } from "@storybook/react";
import { usePerformanceStats } from "../usePerformanceStats";
import { motion } from "framer-motion";

export default {
    title: "Hooks/usePerformanceStats",
    parameters: {
        layout: "centered",
    },
} as Meta;

export const LivePerformanceStats = () => {
    const { fps, memory } = usePerformanceStats();

    return (
        <div
            style={{
                fontFamily: "Inter, sans-serif",
                padding: "20px",
                background: "#0f172a",
                borderRadius: "16px",
                color: "#f8fafc",
                width: "320px",
                boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            }}
        >
            <h3 style={{ textAlign: "center", marginBottom: "16px" }}>
                ⚙️ Performance Stats
            </h3>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    fontSize: "16px",
                }}
            >
                <div>
                    <strong>FPS:</strong>{" "}
                    <motion.span
                        key={fps}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.3 }}
                        style={{
                            color:
                                fps >= 50
                                    ? "#10b981"
                                    : fps >= 30
                                      ? "#f59e0b"
                                      : "#ef4444",
                        }}
                    >
                        {fps}
                    </motion.span>
                </div>

                <div>
                    <strong>Memory:</strong>{" "}
                    <motion.span
                        key={memory}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.3 }}
                        style={{
                            color:
                                memory < 200
                                    ? "#10b981"
                                    : memory < 400
                                      ? "#f59e0b"
                                      : "#ef4444",
                        }}
                    >
                        {memory} MB
                    </motion.span>
                </div>
            </motion.div>

            <div
                style={{
                    marginTop: "20px",
                    fontSize: "13px",
                    color: "#64748b",
                    textAlign: "center",
                }}
            >
                <p>FPS updates every second.</p>
                <p>Memory readings depend on browser support.</p>
            </div>
        </div>
    );
};
