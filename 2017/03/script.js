let input = 289326
// input = 1024
let arr = []
arr[269] = []
arr[269][269] = 1
// arr[16] = []
// arr[16][16] = 1

// arr = [
// 	[ 17, 16, 15, 14, 13 ],
// 	[ 18, 5, 4, 3, 12 ],
// 	[ 19, 6, 1, 2, 11 ],
// 	[ 20, 7, 8, 9, 10 ],
// 	[ 21, 22, 23, 24, 25 ]	
// ]

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

const afterDir = {
	right: "down",
	down: "left",
	left: "up",
	up: "right"
}

const beforeDir = {
	right: "up",
	down: "right",
	left: "down",
	up: "left"
}

let i = 2
let dir = "right"
let prevdir = ""
let prevNr = 1
let prevPos = [269, 269]
// prevPos = [16, 16]
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
	
	arr[pos[0]][pos[1]] = i
	dir = afterDir[dir]
	i++
	prevPos = pos
	prevDir = dir
	// console.log(arr)
}

function visualize() {
	arr.forEach((val, key) => {
		let rowEl = document.createElement("tr")
		val.forEach((nr, key) => {
			let nrEl = document.createElement("td")
			nrEl.innerHTML = nr
			rowEl.appendChild(nrEl)
		})
		document.getElementById("visualize").appendChild(rowEl)
	})
}

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

let nr = 1 // 0
nr = 12 // 3
nr = 23 // 2
nr = 1024 // 31
nr = 289326

let posNr = getPos(nr)
let pos1 = getPos(1)
console.log(`pos ${nr}: ${posNr}`)
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