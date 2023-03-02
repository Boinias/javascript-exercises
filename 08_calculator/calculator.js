

const add = function(numbers) {
  let num = 0
  const sum = function(numberos) {
      for (let i = 0; i < numberos.length; i++) {
          num += numberos[i]
        }
    return num;
  }
};




let num2 = 0
const subtract = function(x,y) {
x-y
}

let num = 0
const sum = function(numberos) {
    for (let i = 0; i < numberos.length; i++) {
        num += numberos[i]
      }
  return num;
};




//remmove 44let num44 = 1
const multiply = function(numberos) {
 numberos.forEach((item,index) => {
 if (item == 0) {
 numberos.splice(index,1)
}})
  for (let i = 0; i < numberos.length; i++) {
        num *= numberos[i]
      }
  return num;
};

//console.log (sum([1,2,3,2,4]))



let powerOf = 0
function power (powerYo) {
	if (powerYo.includes(0)) {
    console.log("Can't multiply by zero bud")
  } else if (powerYo.length > 2) {
    console.log("That don't make sense brotha")
  }
    powerOf = powerOf+(Math.pow(powerYo[0],powerYo[1]))
    return powerOf
};


//console.log (power([2,2]))





let factor = 1
const factorial = function(num) {
	if (num === 0 || num === 1) {
    factor += 1
  } else {
    let i = num
    while (i > 1) {
      factor *= i
  i--
}
}
};

console.log (factorial(44))
console.log (factor)



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
