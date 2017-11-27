let replacements = [
  { from: "Al", to: "ThF" },
  { from: "Al", to: "ThRnFAr" },
  { from: "B", to: "BCa" },
  { from: "B", to: "TiB" },
  { from: "B", to: "TiRnFAr" },
  { from: "Ca", to: "CaCa" },
  { from: "Ca", to: "PB" },
  { from: "Ca", to: "PRnFAr" },
  { from: "Ca", to: "SiRnFYFAr" },
  { from: "Ca", to: "SiRnMgAr" },
  { from: "Ca", to: "SiTh" },
  { from: "F", to: "CaF" },
  { from: "F", to: "PMg" },
  { from: "F", to: "SiAl" },
  { from: "H", to: "CRnAlAr" },
  { from: "H", to: "CRnFYFYFAr" },
  { from: "H", to: "CRnFYMgAr" },
  { from: "H", to: "CRnMgYFAr" },
  { from: "H", to: "HCa" },
  { from: "H", to: "NRnFYFAr" },
  { from: "H", to: "NRnMgAr" },
  { from: "H", to: "NTh" },
  { from: "H", to: "OB" },
  { from: "H", to: "ORnFAr" },
  { from: "Mg", to: "BF" },
  { from: "Mg", to: "TiMg" },
  { from: "N", to: "CRnFAr" },
  { from: "N", to: "HSi" },
  { from: "O", to: "CRnFYFAr" },
  { from: "O", to: "CRnMgAr" },
  { from: "O", to: "HP" },
  { from: "O", to: "NRnFAr" },
  { from: "O", to: "OTi" },
  { from: "P", to: "CaP" },
  { from: "P", to: "PTi" },
  { from: "P", to: "SiRnFAr" },
  { from: "Si", to: "CaSi" },
  { from: "Th", to: "ThCa" },
  { from: "Ti", to: "BP" },
  { from: "Ti", to: "TiTi" },
  { from: "e", to: "HF" },
  { from: "e", to: "NAl" },
  { from: "e", to: "OMg" }
]
// let molecule = "CRnSiRnCaPTiMgYCaPTiRnFArSiThFArCaSiThSiThPBCaCaSiRnSiRnTiTiMgArPBCaPMgYPTiRnFArFArCaSiRnBPMgArPRnCaPTiRnFArCaSiThCaCaFArPBCaCaPTiTiRnFArCaSiRnSiAlYSiThRnFArArCaSiRnBFArCaCaSiRnSiThCaCaCaFYCaPTiBCaSiThCaSiThPMgArSiRnCaPBFYCaCaFArCaCaCaCaSiThCaSiRnPRnFArPBSiThPRnFArSiRnMgArCaFYFArCaSiRnSiAlArTiTiTiTiTiTiTiRnPMgArPTiTiTiBSiRnSiAlArTiTiRnPMgArCaFYBPBPTiRnSiRnMgArSiThCaFArCaSiThFArPRnFArCaSiRnTiBSiThSiRnSiAlYCaFArPRnFArSiThCaFArCaCaSiThCaCaCaSiRnPRnCaFArFYPMgArCaPBCaPBSiRnFYPBCaFArCaSiAl"
// baseMolecule = "e"
let distinctMolecules = ["e"]

// replacements = [
//   { from: "H", to: "HO" },
//   { from: "H", to: "OH" },
//   { from: "O", to: "HH" }
// ]
// molecule = "HOH" 

function replace(replacement, index, molecule) {
  let newIndex = molecule.indexOf(replacement.from, index)
  if(newIndex >= 0) {
    distinctMolecule = molecule.substr(0, newIndex) + replacement.to + molecule.substr(newIndex + replacement.from.length);
    if(isUnique(distinctMolecule)) {
      distinctMolecules.push(distinctMolecule)
    }
    return newIndex + replacement.from.length
  }
  return molecule.length
}

function isUnique(distinctMolecule) {
  return distinctMolecules.indexOf(distinctMolecule) < 0
}

function lookForReplacement(replacement, molecule) {
  let index = 0
  while(index < molecule.length) {
    index = replace(replacement, index, molecule)
  }
}

function replaceMolecules() {
  for(molecule of distinctMolecules) {
    for(key in replacements) {
      lookForReplacement(replacements[key], molecule)
    }
  }
  console.log("distinct molecules", distinctMolecules)
}
