const isPattern = require('./isPattern');
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {};
const COMPONENT_NAME = 'my-component';
const PROP_NAME = 'my-prop';
const VALID_VALUE = '1a2b3c4d-1234-abcd-1a2b-123456654321';
const PATTERN = /^\w{8}\-\w{4}\-\w{4}\-\w{4}\-\w{12}$/;

describe('isPattern', () => {
	it('should handle undefined value when prop is required', () => {
		// Given
		const props = cloneDeep(baseProps);

		// When
		const actual = isPattern(true, props, PROP_NAME, COMPONENT_NAME, PATTERN);

		// Then
		expect(actual).toBeInstanceOf(Error);
		expect(actual.message).toEqual(`Missing required value for prop "${PROP_NAME}" passed to "${COMPONENT_NAME}".`);
	});
	it('should handle undefined value when prop is not required', () => {
		// Given
		const props = cloneDeep(baseProps);

		// Then
		expect(isPattern(false, props, PROP_NAME, COMPONENT_NAME, PATTERN)).toBeUndefined();
	});
	it('should handle undefined pattern', () => {
		// Given
		const props = cloneDeep(baseProps);
		props[PROP_NAME] = VALID_VALUE;

		// When
		const actual = isPattern(true, props, PROP_NAME, COMPONENT_NAME);

		// Then
		expect(actual).toBeInstanceOf(Error);
		expect(actual.message).toEqual(`Missing pattern for prop "${PROP_NAME}" passed to "${COMPONENT_NAME}".`);
	});
	it('should handle invalid value', () => {
		// Given
		const props = cloneDeep(baseProps);
		props[PROP_NAME] = 'bar';

		// When
		const actual = isPattern(true, props, PROP_NAME, COMPONENT_NAME, PATTERN);

		// Then
		expect(actual).toBeInstanceOf(Error);
		expect(actual.message).toEqual(
			`Invalid prop "${PROP_NAME}" passed to "${COMPONENT_NAME}". Expected to match pattern: /^\\w{8}\\-\\w{4}\\-\\w{4}\\-\\w{4}\\-\\w{12}$/ Actual value: bar`
		);
	});
	it('should handle valid value', () => {
		// Given
		const props = cloneDeep(baseProps);
		props[PROP_NAME] = VALID_VALUE;

		// Then
		expect(isPattern(true, props, PROP_NAME, COMPONENT_NAME, PATTERN)).toBeUndefined();
	});
});
