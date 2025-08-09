module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/$1',
    // Mock next-mdx-remote and its submodules for ESM compatibility
    '^next-mdx-remote$': '<rootDir>/__mocks__/next-mdx-remote.js',
    '^next-mdx-remote/(.*)$': '<rootDir>/__mocks__/next-mdx-remote.js',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
};
