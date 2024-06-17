const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    console.log(val);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is: ${greet}`);
}

// maps

const map = new Map()
map.set('IN', 'India')
map.set('KR', 'Korea')
map.set('ESP', 'Spain')
map.set('POR', 'Portugal')

// console.log(map);

for (const key of map) { 
    console.log(key);  // returns an array
}

for (const [key, values] of map) { 
    console.log(key, ':-', values);  
}

const TrekActi = {
    'act1': 'ice-breaker',
    'act2': 'yoga-activity' ,
    'act3': 'Sw. Talk'

}

// cant iterate objects with forOf 
