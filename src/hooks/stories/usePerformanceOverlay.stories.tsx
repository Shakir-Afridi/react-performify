import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { usePerformanceOverlay } from "../usePerformanceOverlay";

const PerfOverlayDemo = () => {
    const [enabled, setEnabled] = useState(true);
    usePerformanceOverlay(enabled, 500, "bottom-left");

    return (
        <div style={{ padding: "20px" }}>
            <h3>usePerformanceOverlay Hook Demo</h3>
            <p>
                Toggle the overlay below. When enabled, an FPS counter appears
                on the bottom-left corner of your screen.
            </p>
            <button
                onClick={() => setEnabled(!enabled)}
                style={{
                    background: enabled ? "#d33" : "#3d3",
                    color: "white",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                }}
            >
                {enabled ? "Disable Overlay" : "Enable Overlay"}
            </button>
        </div>
    );
};

const meta: Meta<typeof PerfOverlayDemo> = {
    title: "Hooks/usePerformanceOverlay",
    component: PerfOverlayDemo,
};

export default meta;
type Story = StoryObj<typeof PerfOverlayDemo>;

export const Default: Story = {
    render: () => <PerfOverlayDemo />,
};
