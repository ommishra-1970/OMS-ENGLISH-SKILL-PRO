import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    base: '/oms-english-skill-pro/', // IMPORTANT: Replace with your actual GitHub repository name if different
    define: {
      // Polyfill process.env.API_KEY so usage in code works during build and runtime
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});
