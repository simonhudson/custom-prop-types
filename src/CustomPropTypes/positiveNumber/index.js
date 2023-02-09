const hasValue = require('~/helpers/hasValue');

module.exports =
	(options = { isRequired: false }) =>
	(props, propName, componentName) => {
		const { isRequired } = options;
		const propValue = props[propName];
		const propHasValue = hasValue(propValue);

		let ERROR_MSG;

		if (isRequired && !propHasValue) {
			ERROR_MSG = `Missing required value for prop "${propName}" passed to "${componentName}".`;
		} else if (propHasValue && (isNaN(propValue) || (!isNaN(propValue) && propValue < 1))) {
			ERROR_MSG = `Value of "${propName}" must be a number greater than zero.`;
		}

		if (ERROR_MSG) return new Error(ERROR_MSG);
	};
