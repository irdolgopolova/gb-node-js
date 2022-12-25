const { red, yellow, green } = require("colors");

if (!process.argv[2] || !process.argv[3]) {
    console.error(red('Отсутствуют обязательные аргументы'));
    return;
}

const from = Number(process.argv[2]);
const to = Number(process.argv[3]);

if (isNaN(from) || isNaN(to)) {
    console.error(red('Указанные аргументы не являются числами'));
    return;
}

const isSimpleNumber = (number) => {
    if (number <= 1) return false;

    for (let index = 2; index < number; index++) {
        if (number % index === 0) return false;
    }

    return true;
}

let serialIndex = 0;
const paintColors = [green, yellow, red];
const paintNumber = (number) => {
    console.log(paintColors[serialIndex](number));

    serialIndex = (serialIndex === paintColors.length - 1)
        ? 0
        : serialIndex + 1;
}

let exist = false;
for (let index = from; index <= to; index++) {
    if (isSimpleNumber(index)) {
        paintNumber(index);
        exist = true;
    }
}

if (!exist) {
    console.log(red('В указанном промежутке нет простых чисел'));
}
