const name = "Arjun"
const Year = "2nd"

// console.log(name + Year + " Year"); **outdated**

// we now use backtics (``)

console.log(`My name is ${name} and im in ${Year} year Engg. CSE(DS)`);

const fName = new String('arjun')
console.log(fName);

console.log(fName[0]);
console.log(fName[1]);
console.log(fName[2]);
console.log(fName[3]);
console.log(fName[4]);

console.log(fName.length);
console.log(fName.toUpperCase());
console.log(fName.charAt('2'));
console.log(fName.indexOf('j'));


const wName = "Arjun-Nair"
console.log(wName.substring(0,3));

const email = "        arjun           "
console.log(email);
console.log(email.trim());

const url = "https://arjun_nair05/arjun%20nair"
console.log(url.replace('%20', '-'));

console.log(url.includes('arjun'));
