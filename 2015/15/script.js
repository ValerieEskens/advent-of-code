let input = {
  'sprinkles':    { 'capacity': 2, 'durability': 0,  'flavor': -2, 'texture': 0, 'calories': 3 },
  'butterscotch': { 'capacity': 0, 'durability': 5,  'flavor': -3, 'texture': 0, 'calories': 3 },
  'chocolate':    { 'capacity': 0, 'durability': 0,  'flavor': 5,  'texture': -1,'calories': 8 },
  'candy':        { 'capacity': 0, 'durability': -1, 'flavor': 0,  'texture': 5, 'calories': 8 }
}

let teaspoons = {}
let cookie = {}
let totalScore = 0
let highestScore = 1

function resetVariables() {
  teaspoons = {}
  cookie = {}
  totalScore = 0
}

function randomizeTeaspoons() {
  let teaspoonsLeft = 100
  let loop = 0
  let total = 0
  for(key in input) {
      if(loop === Object.keys(input).length-1) {
          teaspoons[key] = teaspoonsLeft
      } else {
          teaspoons[key] = Math.round((Math.random() * teaspoonsLeft)*1)
          teaspoonsLeft = teaspoonsLeft - teaspoons[key]
      }
      total += teaspoons[key]
      loop++
  }
}

function calculateIngredient() {
  for(ingredient in input) {
      for(property in input[ingredient]) {
          cookie[property] = cookie[property] || 0
          cookie[property] += teaspoons[ingredient] * input[ingredient][property]
      }
  }
}

function propertiesAboveZero() {
  for(property in cookie) {
      cookie[property] = (cookie[property] < 0) ? 0 : cookie[property]
  }
}

function calcTotalScore() {
  let total = 1
  for(property in cookie) {
      if(property !== "calories") {
          total *= cookie[property]
      }
  }
  return total
}

function calc() {
  while(cookie.calories !== 500 || totalScore < highestScore) {
      resetVariables()

      randomizeTeaspoons()

      calculateIngredient()
      propertiesAboveZero()

      totalScore = calcTotalScore()
  }
  highestScore = totalScore
  totalScore = 0
  document.getElementById("part1").innerHTML += `<br> totalScore: ${highestScore}; Calories: ${cookie.calories}`
}