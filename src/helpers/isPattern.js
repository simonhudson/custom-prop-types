module.exports = (isRequired, props, propName, componentName, pattern) => {
	const propValue = props[propName];

	let ERROR_MSG;

	if (isRequired && !propValue)
		ERROR_MSG = `Missing required value for prop "${propName}" passed to "${componentName}".`;
	else if (!!propValue && !pattern)
		ERROR_MSG = `Missing pattern for prop "${propName}" passed to "${componentName}".`;
	else if (!!propValue && !!pattern && !pattern.test(propValue))
		ERROR_MSG = `Invalid prop "${propName}" passed to "${componentName}". Expected to match pattern: ${pattern} Actual value: ${propValue}`;

	if (ERROR_MSG) return new Error(ERROR_MSG);
};
