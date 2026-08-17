import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    // Required for @testing-library/react's automatic cleanup between tests.
    globals: true,
    // Use worker threads instead of child processes: the `forks` pool can
    // time out on Windows when the project path contains spaces.
    pool: "threads",
  },
});
