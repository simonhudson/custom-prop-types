const hasValue = require('./hasValue');

describe('hasValue', () => {
	it('should return false when value is undefined or null', () => {
		expect(hasValue(null)).toBe(false);
		expect(hasValue(undefined)).toBe(false);
		expect(hasValue()).toBe(false);
	});
	[123, 'foo', { foo: 'bar' }, [1, 2, 3, 4], true, false].forEach((value) => {
		it(`should return true when value is ${value} (${typeof value})`, () => {
			expect(hasValue(value)).toBe(true);
		});
	});
});
