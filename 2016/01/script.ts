let input: string = "R3, L5, R2, L2, R1, L3, R1, R3, L4, R3, L1, L1, R1, L3, R2, L3, L2, R1, R1, L1, R4, L1, L4, R3, L2, L2, R1, L1, R5, R4, R2, L5, L2, R5, R5, L2, R3, R1, R1, L3, R1, L4, L4, L190, L5, L2, R4, L5, R4, R5, L4, R1, R2, L5, R50, L2, R1, R73, R1, L2, R191, R2, L4, R1, L5, L5, R5, L3, L5, L4, R4, R5, L4, R4, R4, R5, L2, L5, R3, L4, L4, L5, R2, R2, R2, R4, L3, R4, R5, L3, R5, L2, R3, L1, R2, R2, L3, L1, R5, L3, L5, R2, R4, R1, L1, L5, R3, R2, L3, L4, L5, L1, R3, L5, L2, R2, L3, L4, L1, R1, R4, R2, R2, R4, R2, R2, L3, L3, L4, R4, L4, L4, R1, L4, L4, R1, L2, R5, R2, R3, R3, L2, L5, R3, L3, R5, L2, R3, R2, L4, L3, L1, R2, L2, L3, L5, R3, L1, L3, L4, L3";

let inputArr: Array<string> = input.split(", ");
let locations: Array<string> = [];
let firstCoorTwice = undefined;

let coor: Array<number> = [0, 0]
let directions = { 
	north: "north",
	east: "east",
	south: "south",
	west: "west"	
};
let facedTo: string = directions.north;
let orientations = {
	north: { R: "east",  L: "west"  },
	east:  { R: "south", L: "north" },
	south: { R: "west",  L: "east"  },
	west:  { R: "north", L: "south" },
}

function walk(direction: string, blocks: number): void {
	switch(direction) {
		case directions.north:
			setStep(0, blocks, "+");
			break;
		case directions.east:
			setStep(1, blocks, "+");
			break;
		case directions.south:
			setStep(0, blocks, "-");
			break;
		case directions.west:
			setStep(1, blocks, "-");
			break;
	}
}

function setStep(coorPart: number, nr: number, opp: string): void {
	for(let i = 1; i <= nr; i++) {
		if(opp == "+") {
			coor[coorPart]++;
		} else {
			coor[coorPart]--;
		}
		let coorString: string = coor[0]+"-"+coor[1]

		if(!firstCoorTwice && locations.indexOf(coorString) != -1) {
			firstCoorTwice = coorString
			console.log('coor twice', firstCoorTwice, ':', Math.abs(coor[0]) + Math.abs(coor[1]), 'blocks away')
		}

		locations.push(coorString);
	}
}

for(let i of inputArr) {
	let direction = i.substr(0,1);
	let blocks = i.substr(1,i.length);
	facedTo = orientations[facedTo][direction];
	walk(facedTo, parseInt(blocks));
}

console.log('coor Easter Bunny HQ', Math.abs(coor[0]) + Math.abs(coor[1]));
