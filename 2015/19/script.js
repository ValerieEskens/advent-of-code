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
let molecule = "CRnSiRnCaPTiMgYCaPTiRnFArSiThFArCaSiThSiThPBCaCaSiRnSiRnTiTiMgArPBCaPMgYPTiRnFArFArCaSiRnBPMgArPRnCaPTiRnFArCaSiThCaCaFArPBCaCaPTiTiRnFArCaSiRnSiAlYSiThRnFArArCaSiRnBFArCaCaSiRnSiThCaCaCaFYCaPTiBCaSiThCaSiThPMgArSiRnCaPBFYCaCaFArCaCaCaCaSiThCaSiRnPRnFArPBSiThPRnFArSiRnMgArCaFYFArCaSiRnSiAlArTiTiTiTiTiTiTiRnPMgArPTiTiTiBSiRnSiAlArTiTiRnPMgArCaFYBPBPTiRnSiRnMgArSiThCaFArCaSiThFArPRnFArCaSiRnTiBSiThSiRnSiAlYCaFArPRnFArSiThCaFArCaCaSiThCaCaCaSiRnPRnCaFArFYPMgArCaPBCaPBSiRnFYPBCaFArCaSiAl"

let distinctMolecules = []

// replacements = [
//   { from: "H", to: "HO" },
//   { from: "H", to: "OH" },
//   { from: "O", to: "HH" }
// ]
// molecule = "HOHOHO"

function replace(replacement, index) {
  let newIndex = molecule.indexOf(replacement.from, index)
  if(newIndex >= 0) {
    distinctMolecule = molecule.substr(0, newIndex) + replacement.to + molecule.substr(newIndex + 1);
    distinctMolecules.push(distinctMolecule)
    return newIndex+1
  }
  return molecule.length
}

function lookForReplacement(replacement) {
  let index = 0
  while(index < molecule.length) {
    index = replace(replacement, index)
  }
}

function init() {
  for(key in replacements) {
    console.log(replacements[key])
    lookForReplacement(replacements[key])
  }
  console.log("distinct molecules", distinctMolecules)
}

init()