let instructionsString: string = `rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 3
rect 1x1
rotate row y=0 by 3
rect 2x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 3
rect 2x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 3
rect 2x1
rotate row y=0 by 5
rect 4x1
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate row y=0 by 10
rotate column x=5 by 2
rotate column x=0 by 1
rect 9x1
rotate row y=2 by 5
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate row y=2 by 5
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate column x=40 by 1
rotate column x=27 by 1
rotate column x=22 by 1
rotate column x=17 by 1
rotate column x=12 by 1
rotate column x=7 by 1
rotate column x=2 by 1
rotate row y=2 by 5
rotate row y=1 by 3
rotate row y=0 by 5
rect 1x3
rotate row y=2 by 10
rotate row y=1 by 7
rotate row y=0 by 2
rotate column x=3 by 2
rotate column x=2 by 1
rotate column x=0 by 1
rect 4x1
rotate row y=2 by 5
rotate row y=1 by 3
rotate row y=0 by 3
rect 1x3
rotate column x=45 by 1
rotate row y=2 by 7
rotate row y=1 by 10
rotate row y=0 by 2
rotate column x=3 by 1
rotate column x=2 by 2
rotate column x=0 by 1
rect 4x1
rotate row y=2 by 13
rotate row y=0 by 5
rotate column x=3 by 1
rotate column x=0 by 1
rect 4x1
rotate row y=3 by 10
rotate row y=2 by 10
rotate row y=0 by 5
rotate column x=3 by 1
rotate column x=2 by 1
rotate column x=0 by 1
rect 4x1
rotate row y=3 by 8
rotate row y=0 by 5
rotate column x=3 by 1
rotate column x=2 by 1
rotate column x=0 by 1
rect 4x1
rotate row y=3 by 17
rotate row y=2 by 20
rotate row y=0 by 15
rotate column x=13 by 1
rotate column x=12 by 3
rotate column x=10 by 1
rotate column x=8 by 1
rotate column x=7 by 2
rotate column x=6 by 1
rotate column x=5 by 1
rotate column x=3 by 1
rotate column x=2 by 2
rotate column x=0 by 1
rect 14x1
rotate row y=1 by 47
rotate column x=9 by 1
rotate column x=4 by 1
rotate row y=3 by 3
rotate row y=2 by 10
rotate row y=1 by 8
rotate row y=0 by 5
rotate column x=2 by 2
rotate column x=0 by 2
rect 3x2
rotate row y=3 by 12
rotate row y=2 by 10
rotate row y=0 by 10
rotate column x=8 by 1
rotate column x=7 by 3
rotate column x=5 by 1
rotate column x=3 by 1
rotate column x=2 by 1
rotate column x=1 by 1
rotate column x=0 by 1
rect 9x1
rotate row y=0 by 20
rotate column x=46 by 1
rotate row y=4 by 17
rotate row y=3 by 10
rotate row y=2 by 10
rotate row y=1 by 5
rotate column x=8 by 1
rotate column x=7 by 1
rotate column x=6 by 1
rotate column x=5 by 1
rotate column x=3 by 1
rotate column x=2 by 2
rotate column x=1 by 1
rotate column x=0 by 1
rect 9x1
rotate column x=32 by 4
rotate row y=4 by 33
rotate row y=3 by 5
rotate row y=2 by 15
rotate row y=0 by 15
rotate column x=13 by 1
rotate column x=12 by 3
rotate column x=10 by 1
rotate column x=8 by 1
rotate column x=7 by 2
rotate column x=6 by 1
rotate column x=5 by 1
rotate column x=3 by 1
rotate column x=2 by 1
rotate column x=1 by 1
rotate column x=0 by 1
rect 14x1
rotate column x=39 by 3
rotate column x=35 by 4
rotate column x=20 by 4
rotate column x=19 by 3
rotate column x=10 by 4
rotate column x=9 by 3
rotate column x=8 by 3
rotate column x=5 by 4
rotate column x=4 by 3
rotate row y=5 by 5
rotate row y=4 by 5
rotate row y=3 by 33
rotate row y=1 by 30
rotate column x=48 by 1
rotate column x=47 by 5
rotate column x=46 by 5
rotate column x=45 by 1
rotate column x=43 by 1
rotate column x=38 by 3
rotate column x=37 by 3
rotate column x=36 by 5
rotate column x=35 by 1
rotate column x=33 by 1
rotate column x=32 by 5
rotate column x=31 by 5
rotate column x=30 by 1
rotate column x=23 by 4
rotate column x=22 by 3
rotate column x=21 by 3
rotate column x=20 by 1
rotate column x=12 by 2
rotate column x=11 by 2
rotate column x=3 by 5
rotate column x=2 by 5
rotate column x=1 by 3
rotate column x=0 by 4`;

const rectSplitter: string = "x"
const instructionTypes = {
	rotate: "rotate",
	rect: "rect"
}
const rotateDirections: Object = {
	column: "x",
	row: "y",
	x: "column",
	y: "row"
}

const displayValues: Object = {
	0: ".",
	1: "#"
}

interface Rect {
	type: string;
	width: number;
	height: number;
}

interface Rotation {
	type: string;
	direction: string;
	position: number;
	number: number;
}

let instructionsArray: Array<string> = instructionsString.split('\n');
let instructions: Array<Rotation|Rect> = []
let display: Array<Array<number>> = []
let lit: number = 0;

for(let i of instructionsArray) {
	let splittedI: Array<string> = i.split(" ");
	let instruction: Rect|Rotation
	if(splittedI[0] === instructionTypes.rotate) {
		instruction = {
			type: instructionTypes.rotate,
			direction: rotateDirections[splittedI[1]],
			position: parseInt(splittedI[2].substr(2)),
			number: parseInt(splittedI[4])
		}
	} else {
		let [width, height] = splittedI[1].split(rectSplitter);
		instruction = {
			type: instructionTypes.rect,
			width: parseInt(width),
			height: parseInt(height)
		}
	}
	instructions.push(instruction);
}

function createDisplay (width: number, height: number): void {
	let row: number = height-1;
	while(row >= 0) {
		let column: number = width-1;
		display[row] = []
		while(column >= 0) {
			display[row][column] = 0
			column--;
		}
		row--;
	}
}

function createRect(width: number, height: number): void {
	let row: number = height-1;
	while(row >= 0) {
		let column: number = width-1;
		while(column >= 0) {
			display[row][column] = 1;
			column--;
		}
		row--;
	}
}

function rotateX(column: number, number: number): void {
	let displayLength: number = display.length
	let row = display.length-1;
	let tempDisplay = JSON.parse(JSON.stringify(display));
	while(row >= 0) {
		let rowToCopy: number = row-number;
		while(rowToCopy < 0) {
			rowToCopy = rowToCopy + displayLength;
		}
		display[row][column] = tempDisplay[rowToCopy][column]
		row--;
	}
}

function rotateY(row: number, number: number): void {
	let tempRow = JSON.parse(JSON.stringify(display[row]));
	let rowLength: number = tempRow.length;
	let column = tempRow.length-1;
	while(column >= 0) {
		let columnToCopy: number = column-number;
		while(columnToCopy < 0) {
			columnToCopy = columnToCopy + rowLength;
		}
		display[row][column] = tempRow[columnToCopy]
		column--;
	}
}

createDisplay(50, 6);

for(let instruction of instructions) {
	if(instruction.type === instructionTypes.rect) {
		createRect(instruction.width, instruction.height)
	} else if(instruction.direction ===  rotateDirections.column) {
		rotateX(instruction.position, instruction.number)
	} else {
		rotateY(instruction.position, instruction.number)
	}
}

for(let rowNr in display) {
	let rowNode: any = document.createElement("DIV")
	for(let column of display[rowNr]) {
		rowNode.innerHTML += displayValues[column]
		lit += column;
	}
	document.getElementById("display").appendChild(rowNode)
}

console.log("lit", lit)