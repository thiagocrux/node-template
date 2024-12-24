export default {
  '*.{js,ts,mjs,mts}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint . --fix --ignore-pattern "dist/*"`,
    `vitest related --run ${filenames.join(' ')}`,
  ],
};
