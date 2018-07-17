const isObject = (o) => typeof o === 'object' && !Array.isArray(o)

module.exports = (func, times, data) => {
	if (data === undefined) {
		throw Error("No inital data was given")
	}

	let initial_data = data;
 
	for (let i = 0; i < times; i++) {
		let new_data = func(initial_data, i)

		if (new_data !== undefined) {

			switch (typeof new_data) {
				case 'object':
					if (isObject(new_data)) {
						if (Array.isArray(initial_data)) {
							
							const new_array = initial_data
							new_array.push(new_data)
							initial_data = new_array
						} else {

							initial_data = Object.assign(new_data, initial_data)
						}
					} else {
						// if the a array of items was returned back 
						if (Array.isArray(new_data)) {
							
							const new_array = initial_data
							initial_data = new_array.concat(new_data)
						} else {

							const new_array = initial_data
							new_array.push(new_data)
							initial_data = new_array
						}
					}
					break;
				case 'boolean':
					initial_data = new_data;
					break;	
				default:
					if (typeof new_data === 'number' || typeof new_data === 'string') {
						if (Array.isArray(initial_data)) {

							const new_array = initial_data
							initial_data = new_array.concat(new_data)
						} else {
							
							if (typeof new_data === 'number') {
								initial_data = new_data
							} else {
								initial_data += new_data
							}
						}
					}
					break;
			}

		}
	}

	return initial_data
}