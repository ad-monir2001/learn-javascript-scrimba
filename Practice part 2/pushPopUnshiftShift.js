let largeCountries = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco'];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

console.log(largeCountries)

largeCountries.pop()  // ! remove something from last.
console.log(largeCountries)

largeCountries.push('Pakistan')  // ! add something at last.
console.log(largeCountries)

largeCountries.shift() // ! remove something from first.
console.log(largeCountries)

largeCountries.unshift('China') // ! add something at first.
console.log(largeCountries)
