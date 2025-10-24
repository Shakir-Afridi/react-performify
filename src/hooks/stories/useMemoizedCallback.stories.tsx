import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useMemoizedCallback } from "../useMemoizedCallback";

/**
 * Demo component for useMemoizedCallback
 */
const MemoizedCallbackDemo = ({ delay = 1000 }: { delay?: number }) => {
    const [count, setCount] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);
    const [tick, setTick] = useState(0);

    const log = (msg: string) => setLogs((prev) => [...prev, msg]);

    // Memoized callback — stable reference, but always uses latest count
    const handleIncrement = useMemoizedCallback(() => {
        setCount((c) => c + 1);
        log(`🔹 Incremented count`);
    }, []);

    // Simulate component re-renders every few seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTick((t) => t + 1);
        }, delay);
        return () => clearInterval(interval);
    }, [delay]);

    // Track callback identity
    const [callbackId, setCallbackId] = useState<string>(
        Math.random().toString(36).slice(2, 7)
    );

    useEffect(() => {
        // Show when callback identity changes
        const id = handleIncrement.toString().slice(0, 30);
        if (id !== callbackId) {
            setCallbackId(id);
            log("♻️ Callback reference changed");
        }
    }, [handleIncrement]);

    return (
        <div
            style={{
                padding: "20px",
                fontFamily: "system-ui, sans-serif",
                maxWidth: 500,
                margin: "0 auto",
            }}
        >
            <h3>useMemoizedCallback Hook Demo</h3>
            <p>
                Demonstrates a callback that <strong>does not change</strong>{" "}
                between re-renders but always captures the{" "}
                <strong>latest state</strong>.
            </p>

            <div
                style={{
                    background: "#f8f9fa",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    marginBottom: "14px",
                    border: "1px solid #dee2e6",
                }}
            >
                <p>
                    <strong>Count:</strong> {count}
                </p>
                <p>
                    <strong>Re-renders:</strong> {tick}
                </p>
                <p>
                    <strong>Callback ID:</strong>{" "}
                    <span style={{ color: "#00b894" }}>{callbackId}</span>
                </p>
            </div>

            <div style={{ display: "flex", gap: "10px", marginBottom: "14px" }}>
                <button
                    onClick={handleIncrement}
                    style={{
                        padding: "8px 14px",
                        background: "#0984e3",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Increment
                </button>
                <button
                    onClick={() => setCount(0)}
                    style={{
                        padding: "8px 14px",
                        background: "#d63031",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Reset
                </button>
            </div>

            {/* Logs Panel */}
            <div
                style={{
                    background: "#1e272e",
                    color: "#d2dae2",
                    fontFamily: "monospace",
                    padding: "10px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    minHeight: "80px",
                    whiteSpace: "pre-wrap",
                    overflowY: "auto",
                }}
            >
                <strong style={{ color: "#05c46b" }}>Logs:</strong>
                <br />
                {logs.length > 0 ? (
                    logs.map((l, i) => <div key={i}>{l}</div>)
                ) : (
                    <div style={{ color: "#808e9b" }}>No logs yet...</div>
                )}
            </div>
        </div>
    );
};

// Storybook metadata
const meta: Meta<typeof MemoizedCallbackDemo> = {
    title: "Hooks/useMemoizedCallback",
    component: MemoizedCallbackDemo,
    argTypes: {
        delay: {
            control: { type: "number", min: 500, max: 5000, step: 500 },
            description: "Re-render interval delay (ms)",
            defaultValue: 1000,
        },
    },
};

export default meta;

type Story = StoryObj<typeof MemoizedCallbackDemo>;

export const Default: Story = {
    render: (args) => <MemoizedCallbackDemo {...args} />,
};
