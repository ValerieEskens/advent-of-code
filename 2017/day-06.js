const input = [ 2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14]
let scenarios = []

function spreadIt() {
    let max = Math.max(...input);
    let maxIndex = input.indexOf(max)
    input[maxIndex] = 0
    while(max > 0) {
        maxIndex++
        if(maxIndex >= input.length) {
            maxIndex -= input.length
        }
        input[maxIndex]++
        max--
    }
    scenarios.push(input.join(''))
}

spreadIt()
let lastIndex = scenarios.length-1
let matchedIndex = scenarios.indexOf(scenarios[lastIndex])
while(matchedIndex === lastIndex) {
    spreadIt()
    lastIndex = scenarios.length-1
    matchedIndex = scenarios.indexOf(scenarios[lastIndex])
}

console.log("1 - steps: ", scenarios.length)
console.log("2 - difference", lastIndex-matchedIndex)