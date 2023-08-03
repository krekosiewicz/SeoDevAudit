import type {Config} from 'jest';

const config: Config = {
    verbose: true,
    transform: {
        // "^.+\\.(js|ts)$": "ts-jest",
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: [
        "/node_modules/(?![@testing-library/react]).+\\.js$",
        "/node_modules/(?![@testing-library/react]).+\\.ts$",
        "/node_modules/(?![@testing-library/react]).+\\.tsx$",
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
};

export default config;
