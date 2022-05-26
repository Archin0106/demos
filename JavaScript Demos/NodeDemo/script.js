const os = require('os');
const fs = require('fs');

let res = os.cpus();
console.log(res.length);

console.log(os.hostname());
console.log(os.platform());


fs.writeFile('TestFile.txt', 'We are working on NodeJS', (err) => {
    if (err != null) {
        console.log(err);
    } else {
        console.log('File written successfully');
    }
});

fs.readFile('TestFile.txt', (err, data) => {
    if (err == null) {
        console.log(data.toString());
    } else {
        console.log(err);
    }
});