module.exports = {
  globals: {
    DEBUG: false,
    userAgent: 'nodejs',
    __JEST__: true,
    __SAFE_RENDER__: true,
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  clearMocks: true,
  collectCoverageFrom: [
    'atoms/**/*.js',
    'organisms/**/*.js',
    'molecules/**/*.js',
  ],
  coverageDirectory: 'build/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '.stories.js',
    '.helper.js',
    '.data.js',
    '.spec.js',
    '.exclude.js',
    'resource-map.js',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
  setupFiles: [
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  roots: [
    '<rootDir>',
  ],
  modulePaths: [
    '<rootDir>',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    '^molecules[\\/](.*)$': '<rootDir>/molecules/$1',
    '^organisms[\\/](.*)$': '<rootDir>/organisms/$1',
    '^atoms[\\/](.*)$': '<rootDir>/atoms/$1',
    '^utils[\\/](.*)$': '<rootDir>/utils/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!koa)',
  ],
  testURL: 'http://some.test',
  //setupFilesAfterEnv: ['<rootDir>/reporterConfig.js'],
  testPathIgnorePatterns: ['tests'],
};
