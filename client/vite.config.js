import { defineConfig } from "vite";
import { createProxyMiddleware } from "http-proxy-middleware";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Replace with your backend server URL
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": "", // Remove '/api' from the request path
        },
      },
    },
  },
});
