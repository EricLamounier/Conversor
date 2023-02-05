function dec_bin(value) {
    if(value != ''){
        let bin = ''
        let partInt = 0
        let partDec = 0
        let cont = 0

        value = Number(value)

        partInt = Math.trunc(value)
        partDec = value - partInt

        //parte inteira
        while(partInt > 0){
            bin += Math.trunc(partInt%2)
            partInt = Math.trunc(partInt/2)
        }
        bin = inverteString(bin)
    
        //parte decimal
        if(partDec > 0){
            bin += '.'
            while(1){
                partDec *= 2
                bin += Math.trunc(partDec)
    
                partDec = partDec - Math.trunc(partDec)

                if(partDec == 0 || cont == 6){
                    break
                }
                cont++;
                partDec = partDec - Math.trunc(partDec)
            }
        }
        binario.value = bin
    }else{
        binario.value = ''
    }
}

function dec_oct(value) {
    if(value != 0){
        let oct = ''
        let partInt = 0
        let partDec = 0
        let cont = 0

        value = Number(value)

        partInt = Math.trunc(value)
        partDec = value - partInt

        //parte inteira
        while(partInt > 0){
            oct += Math.trunc(partInt%8)
            partInt = Math.trunc(partInt/8)
        }
        oct = inverteString(oct)
    
        //parte decimal
        if(partDec > 0){
            oct += '.'
            while(1){
                partDec *= 8
                oct += Math.trunc(partDec)
    
                partDec = partDec - Math.trunc(partDec)

                if(partDec == 0 || cont == 6){
                    break
                }
                cont++;
                partDec = partDec - Math.trunc(partDec)
            }
        }
        octal.value = oct
    }else{
        octal.value = ''
    }
}

function dec_hex(value) {
    if(value != 0){
        let hex = ''
        let partInt = 0
        let partDec = 0
        let cont = 0

        value = Number(value)

        partInt = Math.trunc(value)
        partDec = value - partInt

        //parte inteira
        while(partInt > 0){
            if(Math.trunc(partInt%16) <= 9){
                hex += Math.trunc(partInt%16)
            }else{
                switch(Math.trunc(partInt%16)){
                    case 10:
                        hex += 'A'
                        break;

                    case 11:
                        hex += 'B'
                        break;

                    case 12:
                        hex += 'C'
                        break;

                    case 13:
                        hex += 'D'
                        break;

                    case 14:
                        hex += 'E'
                        break;

                    case 15:
                        hex += 'F'
                        break;
                }
            }
            partInt = Math.trunc(partInt/16)
        }
        hex = inverteString(hex)
    
        //parte decimal
        if(partDec > 0){
            hex += '.'
            while(1){
                partDec *= 16
                if(Math.trunc(partInt%16) <= 9){
                    hex += Math.trunc(partDec%16)
                }else{
                    switch(Math.trunc(partDec%16)){
                        case 10:
                            hex += 'A'
                            break;
    
                        case 11:
                            hex += 'B'
                            break;
    
                        case 12:
                            hex += 'C'
                            break;
    
                        case 13:
                            hex += 'D'
                            break;
    
                        case 14:
                            hex += 'E'
                            break;
    
                        case 15:
                            hex += 'F'
                            break;
                    }
                }
                partDec = partDec - Math.trunc(partDec)

                if(partDec == 0 || cont == 6){
                    break
                }
                cont++;
                partDec = partDec - Math.trunc(partDec)
            }
        }
        hexadecimal.value = hex
    }else{
        hexadecimal.value = ''
    }
}

//Inverte String
function inverteString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}