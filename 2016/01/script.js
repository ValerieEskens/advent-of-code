var input = "R3, L5, R2, L2, R1, L3, R1, R3, L4, R3, L1, L1, R1, L3, R2, L3, L2, R1, R1, L1, R4, L1, L4, R3, L2, L2, R1, L1, R5, R4, R2, L5, L2, R5, R5, L2, R3, R1, R1, L3, R1, L4, L4, L190, L5, L2, R4, L5, R4, R5, L4, R1, R2, L5, R50, L2, R1, R73, R1, L2, R191, R2, L4, R1, L5, L5, R5, L3, L5, L4, R4, R5, L4, R4, R4, R5, L2, L5, R3, L4, L4, L5, R2, R2, R2, R4, L3, R4, R5, L3, R5, L2, R3, L1, R2, R2, L3, L1, R5, L3, L5, R2, R4, R1, L1, L5, R3, R2, L3, L4, L5, L1, R3, L5, L2, R2, L3, L4, L1, R1, R4, R2, R2, R4, R2, R2, L3, L3, L4, R4, L4, L4, R1, L4, L4, R1, L2, R5, R2, R3, R3, L2, L5, R3, L3, R5, L2, R3, R2, L4, L3, L1, R2, L2, L3, L5, R3, L1, L3, L4, L3";
var inputArr = input.split(", ");
var locations = [];
var firstCoorTwice = undefined;
var coor = [0, 0];
var directions = {
    north: "north",
    east: "east",
    south: "south",
    west: "west"
};
var facedTo = directions.north;
var orientations = {
    north: { R: "east", L: "west" },
    east: { R: "south", L: "north" },
    south: { R: "west", L: "east" },
    west: { R: "north", L: "south" }
};
function walk(direction, blocks) {
    switch (direction) {
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
function setStep(coorPart, nr, opp) {
    for (var i = 1; i <= nr; i++) {
        if (opp == "+") {
            coor[coorPart]++;
        }
        else {
            coor[coorPart]--;
        }
        var coorString = coor[0] + "-" + coor[1];
        if (!firstCoorTwice && locations.indexOf(coorString) != -1) {
            firstCoorTwice = coorString;
            console.log('coor twice', firstCoorTwice, ':', Math.abs(coor[0]) + Math.abs(coor[1]), 'blocks away');
        }
        locations.push(coorString);
    }
}
for (var _i = 0, inputArr_1 = inputArr; _i < inputArr_1.length; _i++) {
    var i = inputArr_1[_i];
    var direction = i.substr(0, 1);
    var blocks = i.substr(1, i.length);
    facedTo = orientations[facedTo][direction];
    walk(facedTo, parseInt(blocks));
}
console.log('coor Easter Bunny HQ', Math.abs(coor[0]) + Math.abs(coor[1]));
