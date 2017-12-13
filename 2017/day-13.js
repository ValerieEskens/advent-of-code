let input = {
  0: 3,
  1: 2,
  4: 4,
  6: 4
}

input = { 0: 3, 1: 2, 2: 4, 4: 4, 6: 5, 8: 8, 10: 6, 12: 6, 14: 6, 16: 6, 18: 8, 20: 8, 22: 12, 24: 10, 26: 9, 28: 8, 30: 8, 32: 12, 34: 12, 36: 12, 38: 12, 40: 8, 42: 12, 44: 14, 46: 14, 48: 10, 50: 12, 52: 12, 54: 14, 56: 14, 58: 14, 62: 12, 64: 14, 66: 14, 68: 14, 70: 12, 74: 14, 76: 14, 78: 14, 80: 18, 82: 17, 84: 30, 88: 14, }

let firewall = []
const noScanner = "-"
const scanner = "S"
const directions = {
  up: -1,
  down: 1
}
let currentPos = 0
let caught = []


function createFirewall() {
  firewall = []
  Object.keys(input).forEach(layer => {
    let range = []
    let i = 0
    while(i < input[layer]) {
      range.push(noScanner)
      i++
    }

    firewall[layer] = { direction: directions.down, range: range }
  })
}

function moveScanners() {
  firewall.forEach(layer => {
    let indexOfScanner = layer.range.indexOf(scanner)
    let nextIndexOfScanner = indexOfScanner + layer.direction

    if(nextIndexOfScanner + layer.direction >= layer.range.length) {
      layer.direction = directions.up
    } else if (nextIndexOfScanner + layer.direction < 0) {
      layer.direction = directions.down
    }

    layer.range[indexOfScanner] = noScanner
    layer.range[nextIndexOfScanner] = scanner
  })
}

function initScanner() {
  firewall.forEach(layer => {
    layer.range[0] = scanner
  })
}

function move() {
  if(firewall[currentPos] && firewall[currentPos].range[0] === scanner) {
    caught.push({ 
      depth: currentPos,
      range: firewall[currentPos].range.length
    })
  }
  currentPos++
}

function calculateSeverity() {
  let severity = 0
  caught.forEach(c => {
    severity += c.depth*c.range
  })
  console.log("caught", caught)
  console.log("1 - severity", severity)
  return severity
}

function goThrough(beginAt) {
  createFirewall()
  initScanner()
  caught = []
  currentPos = 0
  let j = 0
  while(j < beginAt) {
    moveScanners()
    j++
  }

  let i = 0
  while(i <= 88) {
    move()
    moveScanners()
    i++
  }
}

let delay = 0
let severity = 1
goThrough(delay)

while(caught.length > 0) {
  delay++
  goThrough(delay)
  severity = calculateSeverity()
  console.log("severity", severity)
}

console.log("delay", delay)





calculateSeverity()
