// Times how long the passed function took to execute
function timeFunction(func) {
	const a = performance.now()
	func()
	const b = performance.now()

	return (b - a).toFixed(2)
}

// Get how much faster AssemblyScript was over the same function in pure JS
function percentFaster(asTime, jsTime) {
	const initialDecimal = asTime / jsTime
	const decimalDifference = 1 - initialDecimal
	const perecentDifference = (decimalDifference * 100).toFixed(2)

	return perecentDifference
}

export { timeFunction, percentFaster }
