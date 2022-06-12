import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://renanlimaleite.github.io/resume-one/',
  plugins: [react(), tsConfigPaths()],
});
