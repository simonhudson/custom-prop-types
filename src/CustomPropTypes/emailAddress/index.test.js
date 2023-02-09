const emailAddress = require('./index');
const isPattern = require('~/helpers/isPattern');
jest.mock('~/helpers/isPattern');

describe('emailAddress', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should call isPattern with expected params', () => {
		// When
		emailAddress({ isRequired: true })('my-props', 'prop-name', 'component-name');

		// Then
		expect(isPattern).toHaveBeenCalledTimes(1);
		expect(isPattern).toHaveBeenCalledWith(
			true,
			'my-props',
			'prop-name',
			'component-name',
			/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
		);
	});
});
