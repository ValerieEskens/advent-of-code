let floors = [
	{ G: ["S", "T", "P", "R", "C"],	M: ["T", "R", "C"] },
	{ G: [],						M: ["S", "P"] },
	{ G: [],						M: [] },
	{ G: [],						M: [] },
]

let objects = {
	S: {G: 1, M: 2 },
	T: {G: 1, M: 2 },
	P: {G: 1, M: 1 },
	R: {G: 1, M: 1 },
	C: {G: 1, M: 1 }
}

function canMicrochipBeOnFloor2(microchip: string, floor: number): boolean {
	if(objects[microchip].G === objects[microchip].M) {
		return true;
	} 
	for(let i in objects) {
		let obj = objects[i]
		if(obj.G === floor) {
			return false;
		}
	}
}

function canGeneratorBeOnFloor(generator: string, floor: number): boolean {
	for(let i in objects) {
		let obj = objects[i]
		if(obj.M === floor && obj.G !== floor) {
			return false;
		}
	}
}
