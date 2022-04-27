// The entry file of your WebAssembly module.

function asExampleOne(): i64 {
	const iterations: i32 = 2_000_000_000
	let returnValue: i32 = 0

	for (let x: i32 = 0; x < iterations; x++) {
		if (x % 2 == 0) {
			returnValue += x
		} else {
			returnValue -= x
		}
	}

	return returnValue
}

export { asExampleOne }
