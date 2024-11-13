import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@common/utils': path.resolve(
        __dirname,
        '../../packages/common/src/main.ts',
      ),
    },
  },
});