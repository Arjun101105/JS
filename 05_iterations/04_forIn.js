const TrekActi = {
    act1: 'ice-breaker',
    act2: 'yoga-activity' ,
    act3: 'Sw. Talk'
}

for (const key in TrekActi) {
   console.log(key);
   console.log(`${key} is ${TrekActi[key]}`);
}

const programming = ["js", "cp", "cpp", "py"] // forOF gives values while for in gives keys
for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', 'India')
// map.set('KR', 'Korea')
// map.set('ESP', 'Spain')
// map.set('POR', 'Portugal')

// for (const key in map) {
//     console.log(key);
// } // not iterateable 
