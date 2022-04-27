function jsExampleOne() {
	const iterations = 2_000_000_000
	let returnValue = 0

	for (let x = 0; x < iterations; x++) {
		if (x % 2 == 0) {
			returnValue += x
		} else {
			returnValue -= x
		}
	}
	return returnValue
}

export { jsExampleOne }
