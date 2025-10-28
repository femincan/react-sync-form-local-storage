# React Sync Form Local Storage

A simple React application demonstrating form state synchronization with localStorage using react-hook-form.

## Features

- Form data automatically saved to localStorage on change
- Form state restored from localStorage on page reload
- Uncontrolled form components to avoid re-renders on every field change
- Built with React, TypeScript, and react-hook-form

## Installation

```bash
pnpm install
```

## Usage

```bash
# Development
pnpm dev

# Build
pnpm build

# Preview production build
pnpm preview

# Lint
pnpm lint
```

## How It Works

The form in [src/App.tsx](src/App.tsx) uses:

- `react-hook-form` for form management with uncontrolled components
- `localStorage` to persist form data
- React's `useEffect` to restore saved data on mount

Form data is automatically saved to localStorage whenever any field changes, and restored when the page reloads. The form uses uncontrolled components (via `register`) to avoid unnecessary re-renders on every keystroke, improving performance.

## License

MIT License - see [LICENSE](LICENSE) file for details.
