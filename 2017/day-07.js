let input = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`

splittedInput = input.split(/\r?\n/)

for (let i = 0; i < splittedInput.length; i++) {
  let a = splittedInput[i]
  let b = a.split(' ')[0]
  console.log('a', a)
  console.log('b', b)
  let newinput = input.replace(b, a)
  splittedInput[i].splice(i, 1)
  i--
}

console.log(input)