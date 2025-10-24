// src/hooks/useRenderCount.storybook.tsx
import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { useRenderCount } from "../useRenderCount";
import { motion } from "framer-motion";

export default {
    title: "Hooks/useRenderCount",
    parameters: {
        layout: "centered",
    },
} as Meta;

export const RenderCountDemo = () => {
    const [text, setText] = useState("");
    const [clicks, setClicks] = useState(0);
    const renderCount = useRenderCount();

    return (
        <div
            style={{
                fontFamily: "Inter, sans-serif",
                padding: "24px",
                background: "#0f172a",
                borderRadius: "16px",
                color: "#f8fafc",
                width: "360px",
                textAlign: "center",
                boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            }}
        >
            <h3 style={{ marginBottom: "20px" }}>🔁 Render Count Demo</h3>

            <motion.div
                key={renderCount}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 0.3 }}
                style={{
                    fontSize: "42px",
                    fontWeight: "bold",
                    color:
                        renderCount < 10
                            ? "#10b981"
                            : renderCount < 20
                              ? "#f59e0b"
                              : "#ef4444",
                    marginBottom: "16px",
                }}
            >
                {renderCount}
            </motion.div>

            <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
                Component re-rendered <strong>{renderCount}</strong> times.
            </p>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    alignItems: "center",
                }}
            >
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type to trigger re-renders..."
                    style={{
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1px solid #334155",
                        width: "80%",
                        background: "#1e293b",
                        color: "#f8fafc",
                    }}
                />

                <button
                    onClick={() => setClicks((c) => c + 1)}
                    style={{
                        background: "#2563eb",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        color: "#fff",
                        cursor: "pointer",
                        fontWeight: "500",
                    }}
                >
                    Click Me ({clicks})
                </button>
            </div>

            <p
                style={{
                    color: "#64748b",
                    fontSize: "13px",
                    marginTop: "20px",
                }}
            >
                💡 Try typing or clicking — each change triggers a re-render.
            </p>
        </div>
    );
};
