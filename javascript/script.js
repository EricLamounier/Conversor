//Get Decimal
let decimal = document.getElementById('inputDecimal')
decimal.addEventListener('input', () => {
    if(decimal.value[decimal.value.length - 1] == ','){
        decimal.value =decimal.value.replace(',', '.')
    }
    
    dec_bin(decimal.value)
    dec_oct(decimal.value)
    dec_hex(decimal.value)
})

//Get Binario
let binario = document.getElementById('inputBinario')
binario.addEventListener('input', () => {
    if(binario.value[binario.value.length - 1] == ','){
        binario.value =binario.value.replace(',', '.')
    }
    bin_dec(binario.value)
})

//Get Octal
let octal = document.getElementById('inputOctal')
octal.addEventListener('input', () => {
    if(octal.value[octal.value.length - 1] == ','){
        octal.value = octal.value.replace(',', '.')
    }
    oct_dec(octal.value)
})

let h = ['A', 'B', 'C', 'D', 'E', 'F'];

//Get Hexadecimal
let hexadecimal = document.getElementById('inputHexadecimal')
hexadecimal.addEventListener('input', () => {
    hexadecimal.value = hexadecimal.value.toUpperCase();

    if(!(h.includes(hexadecimal.value[hexadecimal.value.length - 1])) && isNaN(hexadecimal.value[hexadecimal.value.length - 1])){
        hexadecimal.value =
        hexadecimal.value.replace(hexadecimal.value[hexadecimal.value.length - 1], '')
        return
    }

    if(hexadecimal.value[hexadecimal.value.length - 1] == ','){
        hexadecimal.value =hexadecimal.value.replace(',', '.')
    }
    hex_dec(hexadecimal.value)
})
