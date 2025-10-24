# ⚡ React Hookstack

[![license](https://img.shields.io/github/license/Shakir-Afridi/react-performify)](LICENSE)
[![issues](https://img.shields.io/github/issues/Shakir-Afridi/react-performify)](https://github.com/Shakir-Afridi/react-performify/issues)
[![typescript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![react](https://img.shields.io/badge/React-19+-61dafb?logo=react)](https://react.dev/)
![Coverage](https://img.shields.io/badge/Coverage-93%25-brightgreen)

A lightweight React performance toolkit that gives developers easy-to-use hooks and utilities to measure, optimize, and visualize component performance. Its goal is to make performance management as easy as state management — all using clean, composable hooks.

---

## 🚀 Features

- 🧠 **Smart utilities** — abstract common React logic into reusable hooks  
- 🪶 **Lightweight** — zero external dependencies  
- ⚙️ **TypeScript support** — fully typed API  
- 🧩 **Composable** — integrate easily into existing code  
- 🔧 **Framework agnostic** — works with any React setup (Vite, CRA, Next.js, etc.)

---

## 📘 Storybook

Explore all hooks interactively on Storybook:  
👉 [Live Demo](https://shakir-afridi.github.io/react-performify/)

## 📦 Installation

Once published to npm:

```bash
npm install react-performify
# or
yarn add react-performify
```

## If you’re developing locally and want to test it

```bash
# Inside react-performify/
npm link

# In your target React project:
npm link react-performify
```

## 🧠 Available Hooks

| Hook Name                    | Description                           |
|------------------------------|---------------------------------------|
| useDebouncedEffect           | Runs effect after delay               |
| useLazyMemo                  | Lazily memoizes value                 |
| useMemoizedCallback          | Memoizes callback to avoid recreation |
| usePerformanceMonitor        | Monitors performance metrics          |
| usePerformanceOverlay        | Displays performance overlay          |
| usePerformanceStats          | Tracks render statistics              |
| useRenderCount               | Counts component renders              |
| useStableObject              | Keeps object reference stable         |
| useThrottledCallback         | Throttles callback execution          |
| useVirtualList               | Optimizes rendering large lists       |
| useWhyDidYouRender           | Logs prop changes between renders     |

## 🧩 Example Usage

```bash
import React from "react";
import { useToggle } from "react-performify";

export const Example = () => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>
        {isOpen ? "Hide" : "Show"} Details
      </button>

      {isOpen && <p>Here are the details...</p>}
    </div>
  );
};
```

## Development

```bash
git clone https://github.com/Shakir-Afridi/react-performify.git
cd react-performify
npm install
```

## Start development mode

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## To test it in another project locally

```bash
npm link
# then in your test project:
npm link react-performify
```

## 🧾 License

This project is licensed under the [MIT License](./LICENSE).

## 💡 Contributing

Contributions are welcome!
If you’d like to add new hooks or fix bugs, please open an issue or submit a pull request.

```bash
# Fork & clone
git clone https://github.com/Shakir-Afridi/react-performify.git

# Create a feature branch
git checkout -b feature/my-new-hook

# Commit changes
git commit -m "feat: add useXYZ hook"

# Push & open PR
git push origin feature/my-new-hook
```

## 👨‍💻 Author

React Hookstack — maintained by passionate open-source developers who believe in clean, reusable React logic

## ⭐ Support

If you find this library useful, please give it a star ⭐ on GitHub —
it helps others discover and support the project!

## Keywords

- **react**
- **hooks**
- **react-hooks**
- **custom-hooks**
- **typescript**
- **utility-hooks**
- **ui-hooks**
- **performance-hooks**
- **frontend**
- **react-library**
