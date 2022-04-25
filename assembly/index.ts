// The entry file of your WebAssembly module.

export function add(): i64 {
	const blah: i64 = Date.now()
	const iterations: i64 = 2_000_000_000
	let returnValue: i64 = 0

	for (let x: i64 = 0; x < iterations; x++) {
		if (x % 2 == 0) {
			returnValue += x
		} else {
			returnValue -= x
		}
	}
	const blah2: i64 = Date.now()

	const blah3: i64 = blah2 - blah
	console.log(blah3.toString())
	return returnValue
}
