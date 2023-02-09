const index = require('./index');

describe('index', () => {
	it('should export expected functions', () => {
		const objectKeys = Object.keys(index);
		expect(objectKeys).toEqual(['positiveNumber']);
		objectKeys.forEach((key) => expect(index[key]).toBeInstanceOf(Function));
	});
});
