import React, { useState, useEffect, useRef } from "react";
import { useWhyDidYouRender } from "../useWhyDidYouRender";

export default {
    title: "Hooks/useWhyDidYouRender",
};

export const Example = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Hello");
    const [logs, setLogs] = useState<string[]>([]);

    const originalConsoleLog = useRef(console.log);

    // Capture logs printed by useWhyDidYouRender
    useEffect(() => {
        console.log = (...args: any[]) => {
            const message = args
                .map((a) =>
                    typeof a === "object" ? JSON.stringify(a, null, 2) : a
                )
                .join(" ");
            setLogs((prev) => [message, ...prev].slice(0, 10)); // keep only last 10 logs
            originalConsoleLog.current(...args);
        };
        return () => {
            console.log = originalConsoleLog.current;
        };
    }, []);

    // Hook usage
    useWhyDidYouRender({ count, text }, "WhyDidYouRenderDemo");

    return (
        <div
            style={{
                fontFamily: "Inter, sans-serif",
                background: "#0f172a",
                color: "#f8fafc",
                padding: "2rem",
                borderRadius: "1rem",
                maxWidth: "600px",
                margin: "2rem auto",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            }}
        >
            <h2
                style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    textAlign: "center",
                }}
            >
                🧩 useWhyDidYouRender Hook
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    marginBottom: "1rem",
                }}
            >
                <button
                    onClick={() => setCount((c) => c + 1)}
                    style={{
                        background: "linear-gradient(90deg, #2563eb, #3b82f6)",
                        border: "none",
                        color: "#fff",
                        padding: "0.6rem 1.2rem",
                        borderRadius: "0.5rem",
                        cursor: "pointer",
                        fontWeight: 600,
                        transition: "all 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                    Increment Count ({count})
                </button>

                <button
                    onClick={() =>
                        setText(text === "Hello" ? "World" : "Hello")
                    }
                    style={{
                        background: "linear-gradient(90deg, #10b981, #22d3ee)",
                        border: "none",
                        color: "#fff",
                        padding: "0.6rem 1.2rem",
                        borderRadius: "0.5rem",
                        cursor: "pointer",
                        fontWeight: 600,
                        transition: "all 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                    Toggle Text ({text})
                </button>
            </div>

            <div
                style={{
                    background: "#1e293b",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    height: "220px",
                    overflowY: "auto",
                    fontSize: "0.9rem",
                }}
            >
                <h3 style={{ margin: "0 0 0.5rem 0", color: "#38bdf8" }}>
                    📜 Logs:
                </h3>
                {logs.length === 0 ? (
                    <p style={{ color: "#94a3b8" }}>
                        No prop changes detected yet.
                    </p>
                ) : (
                    <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                        {logs.map((log, i) => (
                            <li
                                key={i}
                                style={{
                                    marginBottom: "0.5rem",
                                    whiteSpace: "pre-wrap",
                                }}
                            >
                                {log}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
