import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: 'https://backend-mernestate.vercel.app',
         changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),

      },
    },
  },

  plugins: [react(), tailwindcss()],
});
