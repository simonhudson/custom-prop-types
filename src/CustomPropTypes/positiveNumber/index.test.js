const positiveNumber = require('./index');
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {};
const baseOptions = {};
const COMPONENT_NAME = 'my-component';
const PROP_NAME = 'my-prop';

describe('positiveNumber', () => {
	let options, props;

	beforeEach(() => {
		options = cloneDeep(baseOptions);
		props = cloneDeep(baseProps);
	});

	it('should handle undefined value when prop is required', () => {
		// Given
		options.isRequired = true;
		props[PROP_NAME] = null;

		// When
		const actual = positiveNumber(options)(props, PROP_NAME, COMPONENT_NAME);

		// Then
		expect(actual).toBeInstanceOf(Error);
		expect(actual.message).toEqual(`Missing required value for prop "${PROP_NAME}" passed to "${COMPONENT_NAME}".`);
	});
	it('should handle undefined value when prop is not required', () => {
		// When
		const actual = positiveNumber(options)(props, PROP_NAME, COMPONENT_NAME);

		// Then
		expect(actual).toBeUndefined();
	});
	['foo', -1, 0].forEach((value) => {
		it(`should handle invalid value (${value})`, () => {
			// Given
			props[PROP_NAME] = value;

			// When
			const actual = positiveNumber(options)(props, PROP_NAME, COMPONENT_NAME);

			// Then
			expect(actual).toBeInstanceOf(Error);
			expect(actual.message).toEqual(`Value of "${PROP_NAME}" must be a number greater than zero.`);
		});
	});
	[1, 10, 100, 123456].forEach((value) => {
		it(`should handle valid value (${value})`, () => {
			// Given
			props[PROP_NAME] = value;

			// When
			const actual = positiveNumber(options)(props, PROP_NAME, COMPONENT_NAME);

			// Then
			expect(actual).toBeUndefined();
		});
	});
});
