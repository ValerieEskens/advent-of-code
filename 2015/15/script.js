  let input = {
    'sprinkles':    { 'capacity': 2, 'durability': 0,  'flavor': -2, 'texture': 0, 'calories': 3 },
    'butterscotch': { 'capacity': 0, 'durability': 5,  'flavor': -3, 'texture': 0, 'calories': 3 },
    'chocolate':    { 'capacity': 0, 'durability': 0,  'flavor': 5,  'texture': -1,'calories': 8 },
    'candy':        { 'capacity': 0, 'durability': -1, 'flavor': 0,  'texture': 5, 'calories': 8 }
  }

  // input = {
  //   'butterscotch': { 'capacity': -1, 'durability': -2,  'flavor': 6, 'texture': 3, 'calories': 8 },
  //   'cinnamon':     { 'capacity': 2, 'durability': 3,  'flavor': -2, 'texture': -1, 'calories': 3 }
  // }
  
  let inputI = ["sprinkles", "butterscotch", "chocolate", "candy"]
  // inputI = ["cinnamon", "butterscotch"]
  
  let highestSum = 1
  let highestSums = []
  let sum = 0
  
  let sprinkles = 0
  let butterscotch = 0
  let chocolate = 0
  let candy = 0
  let cinnamon = 0
  let calories = 0
  
  sum = 0

  function displayAll() {
    document.getElementById("all").innerHTML = ""
    highestSums.sort().forEach(nr => {
      document.getElementById("all").innerHTML += nr + "<br>"
    })
    
  }

  function clickz() {
    console.log(`sum ${sum}`)
    console.log(`highestSum ${highestSum}`)
    while(sum < highestSum) {
    
      let teaspoons = 100;
      let quantities = [];
      while (quantities.length < inputI.length-1) {
        let q = Math.round(Math.random()*teaspoons);
        quantities.push(q);
        teaspoons -= q;
      }

      sprinkles = quantities[0]
      butterscotch = quantities[1]
      chocolate = quantities[2]
      candy = teaspoons

      // cinnamon = quantities[0]
      // butterscotch = teaspoons

      // butterscotch = 40
      // cinnamon = 60

      let capacity = 0
      let durability = 0
      let flavor = 0
      let texture = 0
      calories = 0

      for(let key in input) {
        capacity    += eval(key)*input[key].capacity
        durability  += eval(key)*input[key].durability
        flavor      += eval(key)*input[key].flavor
        texture     += eval(key)*input[key].texture
        calories    += eval(key)*input[key].calories
      }

      if(capacity<0) { capacity = 0 }
      if(durability<0) { durability = 0 }
      if(flavor<0) { flavor = 0 }
      if(texture<0) { texture = 0 }

      sum = capacity * durability * flavor * texture
    }

    if(sum > 0) {
      highestSum = sum
      sum = 0
    }

    if(calories === 500) {
      highestSums.push(highestSum)
      document.getElementById("part1").innerHTML += `highestSum - ${calories}`
    }
    
}