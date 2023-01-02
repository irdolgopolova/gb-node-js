const firstIpForSearch = '89.123.1.41';
const secondIpForSearch = '34.48.240.111';

const fs = require('fs');
const readStream = fs.createReadStream('./access_tmp.log', 'utf-8');
const firstWriteStream = fs.createWriteStream(`${firstIpForSearch}_requests.log`);
const secondWriteStream = fs.createWriteStream(`${secondIpForSearch}_requests.log`);

let lineNumber = 0;

const readline = require('readline');
const rl = readline.createInterface({
    input: readStream
});

rl.on('line', (line) => {
    if (line.includes(firstIpForSearch)) {
        firstWriteStream.write(line + '\n');
        console.log(`Найдена записть про IP ${firstIpForSearch} на строке ${lineNumber}`);

    }

    if (line.includes(secondIpForSearch)) {
        secondWriteStream.write(line + '\n');
        console.log(`Найдена записть про IP ${secondIpForSearch} на строке ${lineNumber}`);

    }

    ++lineNumber;
});
