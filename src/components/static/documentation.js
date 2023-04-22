

function getEndpoint({name, description, path, method, parameters, returns, examples}) {

	const validMethod = ["GET","POST"].includes(method);
	const validReturn = !!returns;

	parameters = parameters || [];
	examples = examples || [];

	console.assert(validMethod)
	// console.assert (validReturn)

	return {
		name,
		description,
		path,
		method,
		parameters,
		// returns
	}
}

function getParam(name, type, required, description, enumVal, defaultVal) {

	const validType = ["STRING","BOOLEAN","INT"].includes(type);

	enumVal = enumVal || null;
	defaultVal = defaultVal || null;

	console.assert (validType)

	return {
		name,
		description,
		type,
		required,
		default: defaultVal,
		enum: enumVal
	}
}


export {
	getEndpoint,
	getParam
}