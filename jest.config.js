module.exports = {
	moduleNameMapper: {
		'^\\~(.*)$': '<rootDir>/src/$1',
	},
	coverageDirectory: 'coverage/jest',
	collectCoverageFrom: ['src/**/*.js'],
	coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 95,
			lines: 97,
			statements: 97,
		},
		'./src/**/*.js': {
			branches: 80,
			functions: 80,
			lines: 85,
			statements: 85,
		},
	},
};
