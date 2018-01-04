module.exports = (func, times, data) => {
	let newData = data || (typeof data === 'object' ?
		Array.isArray(data) ?
			[] : {}
		: 
		typeof data === 'string' ?
			'' : 0)


	for (let i = 1; i <= times; i++) {
		data = func( data, i )
		
		switch (typeof data) {
			case 'object':
				if (Array.isArray(data)) {
					newData = newData.concat(data)
				} else {
					Object.assign(newData, data)
				}
				break;
			case 'number':
				if (i === times) {
					newData = data
				} else {
					newData += data
				}
				break;
			case 'string':
				if (i === times) {
					newData = data
				} else {
					newData += data
				}
				break;
			case 'boolean':
				newData = data;
				break;	
		}
	}

	return newData
}