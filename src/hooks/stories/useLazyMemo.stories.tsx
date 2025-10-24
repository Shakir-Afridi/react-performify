import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useLazyMemo } from "../useLazyMemo";

const LazyMemoDemo = ({ size = 1000000 }: { size?: number }) => {
    const [trigger, setTrigger] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);
    const [show, setShow] = useState(false);

    const log = (msg: string) => setLogs((prev) => [...prev, msg]);

    const heavyData = useLazyMemo(() => {
        const start = performance.now();
        log("🔁 Running expensive computation...");

        const data = Array.from({ length: size }, (_, i) => i * trigger);
        const duration = performance.now() - start;

        log(`✅ Computation finished in ${duration.toFixed(2)} ms`);
        return { data, duration };
    }, [trigger, size]);

    return (
        <div
            style={{
                padding: "20px",
                fontFamily: "system-ui, sans-serif",
                maxWidth: 500,
                margin: "0 auto",
            }}
        >
            <h3>useLazyMemo Hook Demo</h3>
            <p>
                The computation below runs <strong>only when accessed</strong>,
                not during initial render.
            </p>

            <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                <button
                    onClick={() => {
                        setShow(true);
                        setLogs([]);
                    }}
                    style={{
                        padding: "8px 14px",
                        background: "#0984e3",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Show Result
                </button>
                <button
                    onClick={() => {
                        setTrigger((t) => t + 1);
                        setLogs([]);
                        setShow(true);
                    }}
                    style={{
                        padding: "8px 14px",
                        background: "#00b894",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Recompute
                </button>
            </div>

            {show && heavyData && (
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
                        <strong>Computation time:</strong>{" "}
                        {heavyData.duration.toFixed(2)} ms
                    </p>
                    <p>
                        <strong>First 5 values:</strong>{" "}
                        {heavyData.data.slice(0, 5).join(", ")} ...
                    </p>
                </div>
            )}

            {/* Console Panel */}
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

const meta: Meta<typeof LazyMemoDemo> = {
    title: "Hooks/useLazyMemo",
    component: LazyMemoDemo,
    argTypes: {
        size: {
            control: { type: "number", min: 1000, max: 5000000, step: 50000 },
            description: "Size of the generated array for heavy computation",
            defaultValue: 1000000,
        },
    },
};

export default meta;

type Story = StoryObj<typeof LazyMemoDemo>;

export const Default: Story = {
    render: (args) => <LazyMemoDemo {...args} />,
};
