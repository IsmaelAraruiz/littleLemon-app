export default {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '\\.svg$': 'jest-transform-stub',
        '\\.scss$': 'jest-css-modules-transform',
        '\\.png$': 'jest-transform-stub',
        '\\.jpg$': 'jest-transform-stub',
        '\\.jpeg$': 'jest-transform-stub',
        '\\.gif$': 'jest-transform-stub',
    },
    moduleNameMapper: {
        '\\.(css|scss|sass)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['js', 'jsx', 'mjs', 'cjs', 'ts', 'tsx', 'json', 'node'], 
};
