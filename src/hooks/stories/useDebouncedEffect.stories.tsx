import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useDebouncedEffect } from "../useDebouncedEffect";

/**
 * Demo component to visualize useDebouncedEffect
 */
const DebouncedEffectDemo = ({ delay = 1000 }: { delay?: number }) => {
    const [value, setValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");

    useDebouncedEffect(
        () => {
            setDebouncedValue(value);
        },
        [value],
        delay
    );

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h3>useDebouncedEffect Hook Demo</h3>
            <p>
                Type in the box below. The “debounced value” will only update{" "}
                <strong>{delay}ms</strong> after you stop typing.
            </p>

            <input
                type="text"
                placeholder="Start typing..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{
                    padding: "10px",
                    width: "250px",
                    fontSize: "14px",
                    marginTop: "8px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                }}
            />

            <div style={{ marginTop: "20px" }}>
                <p>
                    <strong>Immediate value:</strong> {value || "—"}
                </p>
                <p>
                    <strong>Debounced value:</strong>{" "}
                    <span style={{ color: "#00b894" }}>
                        {debouncedValue || "—"}
                    </span>
                </p>
            </div>
        </div>
    );
};

// Storybook config
const meta: Meta<typeof DebouncedEffectDemo> = {
    title: "Hooks/useDebouncedEffect",
    component: DebouncedEffectDemo,
    argTypes: {
        delay: {
            control: { type: "number", min: 100, max: 3000, step: 100 },
            description: "Delay in milliseconds before the effect runs",
            defaultValue: 1000,
        },
    },
};

export default meta;

type Story = StoryObj<typeof DebouncedEffectDemo>;

export const Default: Story = {
    render: (args) => <DebouncedEffectDemo {...args} />,
};
