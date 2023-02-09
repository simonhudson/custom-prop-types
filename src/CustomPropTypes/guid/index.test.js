const guid = require('./index');
const isPattern = require('~/helpers/isPattern');
jest.mock('~/helpers/isPattern');

describe('guid', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should call isPattern with expected params', () => {
		// When
		guid({ isRequired: true })('my-props', 'prop-name', 'component-name');

		// Then
		expect(isPattern).toHaveBeenCalledTimes(1);
		expect(isPattern).toHaveBeenCalledWith(
			true,
			'my-props',
			'prop-name',
			'component-name',
			/^\w{8}\-\w{4}\-\w{4}\-\w{4}\-\w{12}$/
		);
	});
});
