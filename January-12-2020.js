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

function opCode2(){
  for(let i = 0; i <= 99; i++){
    for(let j = 0; j <= 99; j++){
    let arr2 = [...code2]
      arr2[1] = i
      arr2[2] = j
      let test = opCode(arr2, 0)
      if(test[0] === 19690720){
        console.log(`noun: ${i} verb: ${j}`)
      }
    }
  }
}

// console.log(opCode(code))
// console.log(opCode(code2)) //152702
opCode2(code2)


let p1 = "R8,U5,L5,D3"
let p2 = "U7,R6,D4,L4"
let path1 = "R992,U221,L822,U805,R667,D397,L969,U433,R918,D517,L494,U909,L224,D738,R247,D312,L803,D656,L571,D968,L392,D332,L581,U487,R522,D780,L74,D561,L246,U380,L125,U11,R735,D761,R482,D208,R985,D991,L352,U140,L586,D492,L777,U96,R682,D969,R775,U279,R671,D423,R838,U907,L486,D702,L432,D625,R463,U559,R12,D531,R510,D347,R147,U949,R175,U160,L975,D627,L537,D343,L406,D237,R953,U725,L996,D740,L703,D996,R157,U356,R247,D541,L592,D345,R580,U656,R50,D423,L158,U502,L86,U729,L720,D464,R901,D739,L20,U21,R497,D14,L580,U610,L114,D858,R853,U550,L354,D433,L507,U144,R9,U422,R674,U604,R107,D999,L420,U675,R538,D491,R84,D158,R303,D450,L616,U938,L162,U102,L160,U275,L281,D164,L254,U103,R60,D707,R655,U128,L907,U225,L292,U919,R517,D276,R308,D113,L455,U584,R899,U321,L417,U449,L780,U387,L579,U224,L192,D325,L626,U145,R178,D162,L18,D469,R169,U694,R162,D806,L10,U979,L944,D304,R719,D253,L343,D711,R429,D933,R445,D772,R230,D407,R335,U883,L900,D377,R413,D44,R805,D378,R421,D860,L597,U63,L583,D561,R235,D502,L37,U29,L381,U803,R588,D972,R678,D223,L440,U835,R88,D16,R529,D867,R742,U25,R353,D952,R31,D202,R737,D744,R765,U154,L969,U851,L22,U165,L12,D457,R635,U829,L996,D871,L397,U995,R215,D505,R93,U12,R183,D920,L442,D393,L919,D803,R22,D806,R776,U558,R263,D222,R111,D530,L908,D640,R351,D172,R315,U731,R25,U718,L172,D145,L606,U803,R837,U310,L607,D523,R271,U927,R3,U518,R754,D322,L924,D256,L997,U153,L904,D745,L475,U346,L979,D658,R208,U924,L484,U961,R94,D283,L79,U927,R122,D513,L806,D480,L971,U340,R328,D427,L494"
let path2 = "L998,U308,R889,D471,R719,U326,L6,U802,L608,U149,R454,U6,R837,U255,L720,D60,L426,D525,L190,U995,R676,U172,R910,U645,R249,D725,R355,U668,L988,U253,L820,D266,R836,D750,R998,U113,L502,U634,L620,U903,L542,D426,L497,D766,R930,U415,R655,D676,L694,D548,L280,U895,L899,U235,R912,D257,R161,D834,R88,D379,L723,U508,L604,D1,R706,D321,R725,U986,R52,D741,L738,D810,R595,U352,L835,D712,R797,D332,L451,D145,L608,U940,R886,D945,R929,D4,R332,D303,L877,D927,R686,U762,L588,D496,R352,D516,R355,D299,L459,D831,R9,U322,R635,U895,L127,U27,R996,D491,L360,U921,L146,U833,L420,D60,R32,D936,R815,D451,R715,U570,R889,D35,R135,U814,L559,D141,L470,U410,L711,D668,L196,U42,R989,U448,L875,U417,R554,U61,R259,D111,L177,D147,L925,D427,R911,U667,L209,U641,L516,U521,R373,D165,L91,U594,R968,U536,L694,U270,R602,U92,L158,U321,R422,D851,L73,D492,L698,D950,L988,U48,L184,D99,R67,D168,R269,D918,L645,D736,L597,U104,L427,U72,R568,D749,R16,U190,L146,D911,L820,D275,R12,U402,R461,D595,L103,D326,R948,U288,L1,D786,R698,D286,L557,U283,R278,U327,R457,D136,L878,D23,L371,U836,R987,U695,R904,U395,R869,U276,R310,D843,L994,D209,R554,U653,L924,U659,R695,U779,L427,U504,R711,D679,R191,D775,R816,D293,L415,D323,R505,U154,R966,U446,R837,U707,L591,D593,L696,U168,R35,U905,R141,U708,L772,D898,R254,U612,R934,U114,R912,D576,L721,D965,R731,U737,R494,D760,R909,D244,R662,D863,L23,D298,L234,D476,L571,D786,L48,U960,L377,U134,R335,D453,R203,D120,L27,U365,R254,U446,R738,D919,L42,U529,R31,D104,R583,U272,R867,U834,L43,D220,R424"
let path3 = "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51"
let path4 = "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7"

function calculatePath(str){
  let arr = str.split(',')
  let x = 0
  let y = 0
  let location = [[x, y]]
  arr.forEach((element) => {
    let char = element.charAt(0)
    let distance = parseInt(element.substring(1))
    let xtemp = x
    let ytemp = y
    if(char === 'R'){
      for(let i = xtemp; i <= xtemp + distance; i++){
        x ++
        location.push([x, y])
      }
    }
    if(char === 'U'){
        for(let i = ytemp; i <= ytemp + distance; i++){
          y ++
          location.push([x, y])
      }
    }
    if(char === 'L'){
      for(let i = xtemp; i >= xtemp - distance; i--){
        x --
        location.push([x, y])
      }
    }
    if(char === 'D'){
      for(let i = ytemp; i >= ytemp - distance; i--){
      y --
      location.push([x, y])
      }
    }
  })
  return location
}

function crossedWires(str1, str2){
  let wire1 = calculatePath(str1)
  let wire2 = calculatePath(str2)
  matches = [[0, 0]]
  wire1.forEach((element) => {
    return wire2.forEach((element2) => {
      if(element2[0] === element[0] && element2[1] === element[1]){
        matches.push(element2)
      }
    })
  })
  matches = matches.filter(e => e[0] !== 0 && e[1] !== 0)
  return matches
}

function findClosest(arr1, arr2){
  let coords = crossedWires(arr1, arr2)
  let shortest = Math.abs(coords[0][0]) + Math.abs(coords[0][1])
  for(let i = 0; i < coords.length; i++){
    let distance = Math.abs(coords[i][0]) + Math.abs(coords[i][1])
    console.log(distance, shortest)
    shortest = Math.min(distance, shortest)
  }
  return Math.min(shortest)
}

// console.log(crossedWires(p1, p2))
// console.log(calculatePath(p1, p2))
// console.log(crossedWires(path1, path2))
// console.log(findClosest(p1, p2))
// console.log(findClosest(path1, path2))
console.log(findClosest(path3, path4))
