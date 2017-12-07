const input = [
  { name: "pbga", weight: 66 },
  { name: "xhth", weight: 57 },
  { name: "ebii", weight: 61 },
  { name: "havc", weight: 66 },
  { name: "ktlj", weight: 57 },
  { name: "fwft", weight: 72, programs: [ "ktlj", "cntj", "xhth" ] },
  { name: "qoyq", weight: 66 },
  { name: "padx", weight: 45, programs: [ "pbga", "havc", "qoyq" ] },
  { name: "tknk", weight: 41, programs: [ "ugml", "padx", "fwft" ] },
  { name: "jptl", weight: 61 },
  { name: "ugml", weight: 68, programs: [ "gyxo", "ebii", "jptl" ] },
  { name: "gyxo", weight: 61 },
  { name: "cntj", weight: 57 },
]

function matchPrograms(loopOver) {
  loopOver.forEach((program, key) => {
    if(program !== undefined && program.programs !== undefined) {
      program.programs.forEach((progInProg, progKey) => {
        let programInInput = input.find((entry, key) => {
          let match = (entry.name == progInProg)
          if(match) {
            input[key] = { name: undefined, weight: undefined}
          }
          return match
        })
        program.programs[progKey] = programInInput
      })
      matchPrograms(program.programs)
      cleanUp(input)
    }
  })
  return loopOver.programs
}

function cleanUp(toClean) {
  for (let i = 0; i < toClean.length; i++) {
    if (toClean[i].name == undefined) {         
      toClean.splice(i, 1);
      i--;
    }
  }
  return toClean;
}

function areThereProgramsWithoutPrograms() {
  let programsWithoutPrograms = true
  input.forEach((program, key) => {
    if(program.programs === undefined) {
      programsWithoutPrograms = false;
    }
  })
  return programsWithoutPrograms
}

let keepLooping = true
let loopData = input
while(keepLooping) {
  matchPrograms(input)
  cleanUp(input)
  keepLooping = !areThereProgramsWithoutPrograms()
  console.log(input)
}