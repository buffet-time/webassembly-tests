import { asExampleOne } from '../build/release.js'
import { jsExampleOne } from './examples.js'
import { timeFunction, percentFaster } from './shared.js'

const asTime = timeFunction(asExampleOne)
const jsTime = timeFunction(jsExampleOne)
const asPercentFaster = percentFaster(asTime, jsTime)

console.log(`AssemblyScript: ${asTime}ms`)
console.log(`JavaScript: ${jsTime}ms`)
console.log(`AssemblyScript is ${asPercentFaster}% faster than JavaScript`)
