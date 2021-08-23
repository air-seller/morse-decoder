const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let array1 = [];

    for (let i = 0; i < expr.length; i += 10) {
        array1.push(expr.substr(i, 10));
    }

    let array2 = array1.map(el => el.match(/.{1,2}/g)
        .map(el => el
        .replace('00', '')
        .replace('10', '.')
        .replace('11', '-'))
        .join('')
        );

    let result = '';

    array2.forEach(el => result += el === '**********' ? ' ' : MORSE_TABLE[el]);

    return result;
}

module.exports = {
    decode
}