module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+spec.+(ts|js)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!**/index.ts',
    '!**/types.ts',
    '!**/__fixtures__/**',
    '!**/__mocks__/**',
  ],
};
