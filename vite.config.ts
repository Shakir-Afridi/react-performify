import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
    base: "",
    plugins: [
        react(),
        dts({
            insertTypesEntry: true, // generates index.d.ts
            outDir: "dist", // ensures types go to dist/
        }),
    ],
    build: {
        lib: {
            entry: "src/index.ts",
            name: "ReactPerformify",
            fileName: (format) => `react-performify.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});
