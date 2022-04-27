import { asExample } from '../build/release.js'

const timeFunction = (func) => {
	const a = performance.now()
	func()
	const b = performance.now()

	return b - a
}

const jsExample = () => {
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

const asTime = timeFunction(asExample).toFixed(2)
const jsTime = timeFunction(jsExample).toFixed(2)
const percentFaster = ((1 - (asTime / jsTime)) * 100).toFixed(2)

console.log(`AssemblyScript: ${asTime}ms`)
console.log(`JavaScript: ${jsTime}ms`)
console.log(`AssemblyScript is ${percentFaster}% faster than JavaScript`)