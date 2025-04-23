import { defaults } from 'jest-config';

export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Para arquivos .js e .jsx
    '^.+\\.tsx?$': 'babel-jest', // Para arquivos .ts e .tsx
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'jsx', 'js', 'tsx', 'ts'],
};