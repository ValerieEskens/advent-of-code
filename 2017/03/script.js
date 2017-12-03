let input = 289326
let arr = []
arr[269] = []
arr[269][269] = 1

const afterDir = 	{ right: "down", down: "left", left: "up", up: "right" }
const beforeDir = { right: "up", down: "right", left: "down", up: "left" }

function getPos(nr) {
	let posx
	let posy
	arr.forEach((a, key) => {
		nrIndex = a.indexOf(nr)
		if(nrIndex !== -1) {
			posx = key
			posy = nrIndex
			return false
		}
	})
	return [posx, posy]
}

function nextPos(dir) {
	let pos
	switch(dir) {
		case "right": pos = [prevPos[0], prevPos[1]+1]
			break
		case "down": pos = [prevPos[0]+1, prevPos[1]]
			break
		case "left": pos = [prevPos[0], prevPos[1]-1]
			break
		case "up": pos = [prevPos[0]-1, prevPos[1]]
			break
	}
	return pos
}

function calcValue(pos) {
	let val = 0
	if(arr[pos[0]-1] !== undefined) {
		val +=	(arr[pos[0]-1][pos[1]-1] || 0) +
						(arr[pos[0]-1][pos[1]] || 0) +
						(arr[pos[0]-1][pos[1]+1] || 0)
	}

	if(arr[pos[0]+1] !== undefined) {
		val +=	(arr[pos[0]+1][pos[1]-1] || 0) +
						(arr[pos[0]+1][pos[1]] || 0) +
						(arr[pos[0]+1][pos[1]+1] || 0)
	}
		
	return val + (arr[pos[0]][pos[1]-1] || 0) + (arr[pos[0]][pos[1]+1] || 0)
}

let i = 2
let dir = "right"
let prevdir = ""
let prevNr = 1
let prevPos = [269, 269]
while(i<= input) {
	let pos = nextPos(dir)

	if(arr[pos[0]] === undefined) {
		arr[pos[0]] = []
	}

	if(arr[pos[0]][pos[1]] !== undefined) {
		dir = beforeDir[dir]
		pos = nextPos(dir)
	}

	if(arr[pos[0]] === undefined) {
		arr[pos[0]] = []
	}
	
	i = calcValue(pos)
	console.log("i", i)
	arr[pos[0]][pos[1]] = i
	dir = afterDir[dir]
	prevPos = pos
	prevDir = dir
}

let posNr = getPos(input)
let pos1 = getPos(1)
console.log(`pos ${input}: ${posNr}`)
console.log(`pos 1: ${pos1}`)

let hor
if(posNr[0] > pos1[0]) {
	hor = posNr[0] - pos1[0]
} else {
	hor = pos1[0] - posNr[0]
}

let ver
if(posNr[1] > pos1[1]) {
	ver = posNr[1] - pos1[1]
} else {
	ver = pos1[1] - posNr[1]
}

console.log(`steps: ${hor+ver}`)