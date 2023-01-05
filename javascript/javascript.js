/*
 * 1 - decimal
 * 2 - binary
 * 3 - octal
 * 4 - hexadecimal
 */

/*Funcao para inverter a string*/
function reverseString(str) {

    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

/*
function converte_dec(){

    //CONVERTENDO PARA BINARIO
    let decimal = document.querySelector('#decimal').value;
    let backup = decimal;
    let bin = '';
    let part_float = decimal - Math.trunc(decimal); //parte decimal
    let backup_float = part_float;

    //--------------------------------------------------------
    //CONVERTENDO PARA BINARIO
    
    decimal = Math.trunc(decimal); //parte inteira

    //parte inteira
    while(decimal > 0){

        bin += decimal%2;
        decimal /= 2;
        decimal = Math.trunc(decimal);
    }

    bin = reverseString(bin);

    //verifica se possui parte decimal 10.3
    if(part_float != 0){
        
        let i=0;
        bin += '.';

        while(part_float != 0){
            part_float *= 2;

            bin += Math.trunc(part_float);

            part_float = part_float -  Math.trunc(part_float);

            if(i == 5){
                break;
            }
            i++;
        }
    }

    //Coloca no binario o valor convertido
    document.querySelector('#binario').value = bin;

    //--------------------------------------------------------
    //CONVERTENDO PARA OCTAL

    decimal = Math.trunc(backup); //parte inteira
    part_float = backup_float; //parte decimal

    let oct = '';

    while(decimal > 0){

        oct += decimal%8;
        decimal /= 8;
        decimal = Math.trunc(decimal);
    }

    oct = reverseString(oct);

    //verifica se possui parte decimal 10.3
    if(part_float != 0){
        
        let i=0;
        oct += '.';

        while(part_float != 0){
            part_float *= 8;

            oct += Math.trunc(part_float);

            part_float = part_float -  Math.trunc(part_float);

            if(i == 5){
                break;
            }

            i++;
        }
    }

    //Coloca no octal o valor convertido
    document.querySelector('#octal').value = oct;

    //--------------------------------------------------------
    //CONVERTENDO PARA HEXADECIMAL
    decimal = Math.trunc(backup); //parte inteira
    part_float = backup_float; //parte decimal

    let hex = '';

    while(decimal > 0){

        switch(Math.trunc(decimal%16)){

            case 10:
                hex += 'A';
            break;

            case 11:
                hex += 'B';
            break;

            case 12:
                hex += 'C';
            break;

            case 13:
                hex += 'D';
            break;

            case 14:
                hex += 'E';
            break;

            case 15:
                hex += 'F';
            break;

            default:
                hex += decimal%16;
            break;
        }
        
        decimal /= 16;
        decimal = Math.trunc(decimal);
    }

    hex = reverseString(hex);

    //verifica se possui parte decimal 10.3
    if(part_float != 0){
        
        let i=0;
        hex += '.';

        while(part_float != 0){

            switch(Math.trunc(part_float*16)){
    
                case 10:
                    hex += 'A';
                break;
    
                case 11:
                    hex += 'B';
                break;
    
                case 12:
                    hex += 'C';
                break;
    
                case 13:
                    hex += 'D';
                break;
    
                case 14:
                    hex += 'E';
                break;
    
                case 15:
                    hex += 'F';
                break;

                default:
                    hex += Math.trunc(part_float*16);
                break;
            }
            
            part_float = part_float*16;
            part_float = part_float -  Math.trunc(part_float);

            if(i == 5){
                break;
            }
            i++;
        }
    }

    //Coloca no hexadecimal o valor convertido
    document.querySelector('#hexadecimal').value = hex;
}
*/

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




/*
function converte_bin(){

    let binario = document.querySelector('#binario').value;
    let tam = binario.length - 1;
    let cont = 0;

    //BINARIO PARA DECIMAL
    //verifica se o valor do campo e' valido somente 0 e 1
    for(let i = 0; i < binario.length; i++){

        if(binario[i] == '1' || binario[i] == '0'){
            
        }else{
            cont++;
            break;
        }
    }

    if(cont == 0){
        let dec = 0;

        for(let i = 0; i < binario.length; i++){

            if(binario[i] == '1'){
                dec += Math.pow(2, tam);
            }
    
            tam--;
        }

        document.querySelector('#decimal').value = dec;
    
    }else{

        document.querySelector('#decimal').value = "Valor invalido!"
    }

    //--------------------------------------
    //BINARIO PARA OCTAL

    //octal para decimal
}*/