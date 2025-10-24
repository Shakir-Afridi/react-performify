// src/hooks/useThrottledCallback.storybook.tsx
import React, { useState, useCallback, useEffect } from "react";
import { Meta } from "@storybook/react";
import { useThrottledCallback } from "../useThrottledCallback";
import { motion } from "framer-motion";

export default {
    title: "Hooks/useThrottledCallback",
    parameters: { layout: "centered" },
} as Meta;

// Module-level persisted store (survives remounts)
const PERSIST: {
    initialized?: boolean;
    rawCalls?: number;
    throttledCalls?: number;
} = {
    initialized: false,
    rawCalls: 0,
    throttledCalls: 0,
};

export const ThrottledCallbackDemo = () => {
    // Initialize state from module-level store
    const [rawCalls, setRawCalls] = useState(() => PERSIST.rawCalls ?? 0);
    const [throttledCalls, setThrottledCalls] = useState(
        () => PERSIST.throttledCalls ?? 0
    );

    // Ensure we do one-time init only (persisted across remounts)
    useEffect(() => {
        if (!PERSIST.initialized) {
            PERSIST.initialized = true;
            console.log("Demo: one-time initialization (module-level)");
        }
    }, []);

    // Keep the module-level store in sync whenever values change
    useEffect(() => {
        PERSIST.rawCalls = rawCalls;
    }, [rawCalls]);

    useEffect(() => {
        PERSIST.throttledCalls = throttledCalls;
    }, [throttledCalls]);

    const handleRaw = useCallback(() => {
        setRawCalls((c) => c + 1);
    }, []);

    const handleThrottled = useThrottledCallback(() => {
        setThrottledCalls((c) => c + 1);
    }, 500);

    const handleMouseMove = () => {
        handleRaw();
        handleThrottled();
    };

    return (
        <div
            style={{
                fontFamily: "Inter, sans-serif",
                padding: "24px",
                background: "#0f172a",
                borderRadius: "16px",
                color: "#f8fafc",
                width: "450px",
                textAlign: "center",
                boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            }}
        >
            <h3 style={{ marginBottom: "16px" }}>
                ⚡ useThrottledCallback Demo
            </h3>

            <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
                Move your mouse inside the box below. The <strong>raw</strong>{" "}
                callback fires on every movement, while the{" "}
                <strong>throttled</strong> one fires at most once every 500ms.
            </p>

            <div
                onMouseMove={handleMouseMove}
                style={{
                    border: "2px dashed #38bdf8",
                    borderRadius: 12,
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#1e293b",
                    color: "#38bdf8",
                    cursor: "crosshair",
                    marginBottom: 20,
                }}
            >
                Move mouse here 🖱️
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <motion.div
                    style={{ padding: 16, borderRadius: 12, minWidth: 150 }}
                >
                    <h4>Raw Calls</h4>
                    <div style={{ fontSize: 28, fontWeight: 700 }}>
                        {rawCalls}
                    </div>
                </motion.div>

                <motion.div
                    style={{ padding: 16, borderRadius: 12, minWidth: 150 }}
                >
                    <h4>Throttled Calls</h4>
                    <div style={{ fontSize: 28, fontWeight: 700 }}>
                        {throttledCalls}
                    </div>
                </motion.div>
            </div>

            <p
                style={{
                    color: "#64748b",
                    fontSize: "13px",
                    marginTop: "20px",
                }}
            >
                💡 Notice: React Strict Mode remounts the component once in dev
                mode, but this guard ensures stable state across
                reinitializations.
            </p>
        </div>
    );
};
