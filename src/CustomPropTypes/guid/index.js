const isPattern = require('~/helpers/isPattern');

module.exports =
	(options = { isRequired: false }) =>
	(props, propName, componentName) =>
		isPattern(options.isRequired, props, propName, componentName, /^\w{8}\-\w{4}\-\w{4}\-\w{4}\-\w{12}$/);
