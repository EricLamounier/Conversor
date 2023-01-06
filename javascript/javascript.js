/*Funcao para inverter a string*/
function reverseString(str) {

    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

function converte_dec(){
    let aux;

    aux = dec_bin(document.querySelector('#decimal').value);
    document.querySelector('#binario').value = aux;

    aux = dec_oct(document.querySelector('#decimal').value);
    document.querySelector('#octal').value = aux;

    aux = dec_hex(document.querySelector('#decimal').value);
    document.querySelector('#hexadecimal').value = aux;
}

function converte_bin(){
    let aux;

    aux = bin_dec(document.querySelector('#binario').value);
    document.querySelector('#decimal').value = aux;

    aux = bin_oct(document.querySelector('#binario').value);
    document.querySelector('#octal').value = aux;

    aux = bin_hex(document.querySelector('#binario').value);
    document.querySelector('#hexadecimal').value = aux;
}

function converte_oct(){
    let aux;

    aux = oct_dec(document.querySelector('#octal').value);
    document.querySelector('#decimal').value = aux;

    aux = oct_bin(document.querySelector('#octal').value);
    document.querySelector('#binario').value = aux;

    aux = oct_hex(document.querySelector('#octal').value);
    document.querySelector('#hexadecimal').value = aux;
}

function converte_hex(){
    let aux;

    aux = hex_dec(document.querySelector('#hexadecimal').value);
    document.querySelector('#decimal').value = aux;

    aux = hex_bin(document.querySelector('#hexadecimal').value);
    document.querySelector('#binario').value = aux;

    aux = hex_oct(document.querySelector('#hexadecimal').value);
    document.querySelector('#octal').value = aux;
}