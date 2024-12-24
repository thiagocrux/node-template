import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    coverage: {
      clean: true,
      reportsDirectory: 'src/__tests__/coverage/',
    },
    setupFiles: ['./src/__tests__/config/vitest.setup.ts'],
  },
});
