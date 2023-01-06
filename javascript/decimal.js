function dec_bin(decimal){
    //CONVERTENDO PARA BINARIO
    //let decimal = document.querySelector('#decimal').value;
    let bin = '';
    let part_float = decimal - Math.trunc(decimal); //parte decimal


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

    //retorna o valor convertido
    if(bin === ".NaNNaNNaNNaNNaNNaN"){
        return "-"
    }else{
        return bin
    }
}

function dec_oct(decimal){
    //CONVERTENDO PARA BINARIO
    let backup = decimal;
    let part_float = decimal - Math.trunc(decimal); //parte decimal
    let backup_float = part_float;

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

    //retorna o valor convertido
    if(oct === ".NaNNaNNaNNaNNaNNaN"){
        return "-"
    }else{
        return oct
    }
}

function dec_hex(decimal){
    //CONVERTENDO PARA HEXADECIMAL
    let backup = decimal;
    let part_float = decimal - Math.trunc(decimal); //parte decimal
    let backup_float = part_float;
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

    //retorna o valor convertido
    if(hex === ".NaNNaNNaNNaNNaNNaN"){
        return "-"
    }else{
        return hex
    }
}