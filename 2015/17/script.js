let input = []

const total = 150
let possibilities = []

function initInput() {
  input = [
    { index: 0, nrOfLiters: 43 },
    { index: 1, nrOfLiters:  3 },
    { index: 2, nrOfLiters:  4 }, 
    { index: 3, nrOfLiters: 10 }, 
    { index: 4, nrOfLiters: 21 }, 
    { index: 5, nrOfLiters: 44 },
    { index: 6, nrOfLiters:  4 },
    { index: 7, nrOfLiters:  6 }, 
    { index: 8, nrOfLiters: 47 }, 
    { index: 9, nrOfLiters: 41 }, 
    { index: 10, nrOfLiters: 34 }, 
    { index: 11, nrOfLiters: 17 }, 
    { index: 12, nrOfLiters: 17 }, 
    { index: 13, nrOfLiters: 44 }, 
    { index: 14, nrOfLiters: 36 }, 
    { index: 15, nrOfLiters: 31 }, 
    { index: 16, nrOfLiters: 46 },
    { index: 17, nrOfLiters:  9 }, 
    { index: 18, nrOfLiters: 27 }, 
    { index: 19, nrOfLiters: 38 }, 
  ]
}

function tryIt() {
  let sum = 0
  let boxes = []
  initInput()

  while(sum < total && input.length !== 0) {
    let random = Math.round(Math.random() * (input.length-1), 1)
    if(random < 0) { random = 0 }
    let [pop] = input.splice(Math.abs(random), 1)
    while(input.length !== 0 && pop.nrOfLiters > (total-sum)){
      random = Math.round(Math.random() * (input.length-1), 1)
      if(random < 0) { random = 0 }
      [pop] = input.splice(Math.abs(random), 1)
    }
    boxes.push(pop.index)
    sum += pop.nrOfLiters
  }
  if(sum === total) {
    boxes = { unique: boxes.sort().toString(), nrOfBoxes: boxes.length }
    let matches = possibilities.find(test => test.unique === boxes.unique )
    
    if(!matches) {
      possibilities.push(boxes)
    }
    console.log(possibilities)
    document.getElementById("part1").innerHTML = possibilities.length
  }
}

while(possibilities.length < 1638) {
  tryIt()
}

function calc() {
  let nrOfBoxes = []
  for(possibility of possibilities) {
    if(nrOfBoxes[possibility.nrOfBoxes] === undefined) {
      nrOfBoxes[possibility.nrOfBoxes] = 0
    }
    nrOfBoxes[possibility.nrOfBoxes]++
  }
  console.log(nrOfBoxes)
}