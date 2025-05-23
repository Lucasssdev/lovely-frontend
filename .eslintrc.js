module.exports = {
  env: {
      browser: true,
      commonjs: true,
      es2021: true,
  },
  extends: ['next/core-web-vitals', 'prettier', "next/babel"],
  overrides: [],
  parserOptions: {
      ecmaVersion: 'latest',
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
  },
}
