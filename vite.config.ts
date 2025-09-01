import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // enables browser APIs like localStorage, document, window
    globals: true,
    setupFiles: "./src/test/setupTests.ts", // optional, for global mocks
  },
})
