let module = [124846,99745,110203,140165,110228,65706,
128481,75921,57331,72951,133413,99524,79546,54653,55166,66215,147696,91054,64752,76311,139572,61110,
65846,121489,147534,66591,109963,83412,138965,70102,
128844,141002,77655,68539,128687,70559,140747,51397,
117550,91515,60960,133280,83244,106644,100333,67608,
118120,60024,115547,136229,108403,128776,109599,
111189,98538,129715,116630,120772,80105,52489,130247,
144003,85226,83769,137921,54737,126406,108756,
149633,138201,78980,126909,125768,86214,54873,
97723,92677,120405,143317,102981,142668,100398,
67258,126583,114611,102525,115205,78329,140703,136978,
94465,129510,81039,141997,120643,55377,89966,113672,
112665,51323]
let calcAllFuel=(arr)=>{
  return arr.map(el => calcFuel(el)).reduce((acc, curr) => acc + curr)}


function calcFuel(mass){
  let fuel = calcMassFuel(mass)
  if(fuel > 0){
    let temp = calcFuel(fuel)
    if(temp > 0){
      fuel += calcFuel(fuel)
    }
  }
  return fuel
}

let calcMassFuel=(mass)=> Math.floor(mass/3) - 2

console.log(calcAllFuel(module))

console.log(calcFuel(100756)) //50346
console.log(calcFuel(1969)) //966
console.log(calcFuel(14))
let answer = 5105716

let code = [1,9,10,3,2,3,11,0,99,30,40,50]
let code2 = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,2,19,9,23,1,23,5,27,2,6,27,31,1,31,5,35,1,35,5,39,2,39,6,43,2,43,10,47,1,47,6,51,1,51,6,55,2,55,6,59,1,10,59,63,1,5,63,67,2,10,67,71,1,6,71,75,1,5,75,79,1,10,79,83,2,83,10,87,1,87,9,91,1,91,10,95,2,6,95,99,1,5,99,103,1,103,13,107,1,107,10,111,2,9,111,115,1,115,6,119,2,13,119,123,1,123,6,127,1,5,127,131,2,6,131,135,2,6,135,139,1,139,5,143,1,143,10,147,1,147,2,151,1,151,13,0,99,2,0,14,0]
function opCode(arr, index=0){
  let op = arr[index]
  let num1 = arr[index+1]
  let num2 = arr[index+2]
  let overwrite = arr[index+3]
  if(op === 99){return arr}
  if(op === 1){arr[overwrite] = add(arr[num1], arr[num2])}
  else if(op === 2){arr[overwrite] = multiply(arr[num1], arr[num2])}
  index+=4
  opCode(arr, index)
  return arr
}

let add = (num1, num2) => num1 + num2
let multiply = (num1, num2) => num1 * num2

console.log(opCode(code))
console.log(opCode(code2))
