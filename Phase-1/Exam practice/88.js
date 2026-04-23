const fs = require('fs');

const division1 = { numbers: [2, 5, 3, 10, 4] };
const division2 = { numbers: [3, 2, 4, 2, 5] }; 

const initialData = JSON.stringify({ division1, division2 })

fs.writeFileSync('D://working files/XYZ.txt', "Initial Divisions:\n" + initialData + "\n");

const result = [];
for (let i = 0; i <division1.numbers.length ; i++) {
    const base = division1.numbers[i];
    const power = division2.numbers[i];
    
    const calculation = Math.pow(base, power);
    result.push(calculation);
}

const resultString = "Result Array (a^b): [" + result + "]";
console.log(resultString)
fs.appendFileSync('D://working files/XYZ.txt', resultString);