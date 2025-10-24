import React, { useEffect, useState } from "react";
import { usePerformanceMonitor } from "../usePerformanceMonitor";

export default {
    title: "Hooks/usePerformanceMonitor",
    parameters: { layout: "centered" },
};

export const Default = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const [refreshRate, setRefreshRate] = useState(800);
    const { fps, duration, name } = usePerformanceMonitor(
        "UI Render",
        refreshRate
    );

    useEffect(() => {
        setLogs((prev) => [
            ...prev.slice(-9),
            `🕒 ${new Date().toLocaleTimeString()} — ${fps.toFixed(1)} fps | ${duration.toFixed(0)} ms`,
        ]);
    }, [fps, duration]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRefreshRate(Number(e.target.value));
    };

    return (
        <div
            style={{
                background: "#0d1117",
                color: "#e6edf3",
                fontFamily: "monospace",
                padding: "20px",
                borderRadius: "12px",
                width: "450px",
                height: "400px",
                overflow: "auto",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
        >
            <h3 style={{ color: "#58a6ff" }}>{name}</h3>

            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="refresh" style={{ marginRight: "10px" }}>
                    <strong>Refresh rate:</strong>
                </label>
                <select
                    id="refresh"
                    value={refreshRate}
                    onChange={handleChange}
                    style={{
                        background: "#161b22",
                        color: "#e6edf3",
                        border: "1px solid #30363d",
                        borderRadius: "6px",
                        padding: "4px 8px",
                    }}
                >
                    <option value={200}>200 ms</option>
                    <option value={500}>500 ms</option>
                    <option value={800}>800 ms</option>
                    <option value={1000}>1000 ms</option>
                    <option value={2000}>2000 ms</option>
                </select>
            </div>

            <p>
                <strong>FPS:</strong> {fps.toFixed(1)} |{" "}
                <strong>Duration:</strong> {duration.toFixed(0)} ms
            </p>

            <div
                style={{
                    marginTop: "10px",
                    background: "#161b22",
                    padding: "10px",
                    borderRadius: "8px",
                    height: "250px",
                    overflowY: "auto",
                    fontSize: "0.9rem",
                }}
            >
                {logs.map((log, i) => (
                    <div key={i}>{log}</div>
                ))}
            </div>
        </div>
    );
};
