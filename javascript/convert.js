import * as dec from './decimal.js'
import * as bin from './binary.js'
import * as oct from './octal.js'
import * as hex from './hexadecimal.js'

let inputDecimal = document.getElementById('inputDecimal');
let inputBinary = document.getElementById('inputBinario');
let inputOctal = document.getElementById('inputOctal');
let inputHexadecimal = document.getElementById('inputHexadecimal');

inputDecimal.addEventListener('input', () => {
    inputBinary.value = dec.dec_bin(inputDecimal.value);
    inputOctal.value = dec.dec_oct(inputDecimal.value);
    inputHexadecimal.value = dec.dec_hex(inputDecimal.value);
});

inputBinary.addEventListener('input', () => {
    let decimal = bin.bin_dec(inputBinary.value);

    inputDecimal.value = decimal;
    inputOctal.value = dec.dec_oct(decimal);
    inputHexadecimal.value = dec.dec_hex(decimal);
});

inputOctal.addEventListener('input', () => {
    let decimal = oct.oct_dec(inputOctal.value);

    inputDecimal.value = decimal;
    inputBinary.value = dec.dec_bin(decimal);
    inputHexadecimal.value = dec.dec_hex(decimal);
});

inputHexadecimal.addEventListener('input', () => {
    let decimal = hex.hex_dec(inputHexadecimal.value);

    inputDecimal.value = decimal;
    inputBinary.value = dec.dec_bin(decimal);
    inputOctal.value = dec.dec_oct(decimal);
})