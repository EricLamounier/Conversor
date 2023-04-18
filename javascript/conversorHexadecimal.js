function hex_dec(value) {
    let partInt = 0
    let partDec = 0
    let dec = 0
    let tam = 0

    partInt = value.split('.')[0]
    partDec = value.split('.')[1]

    console.log(partInt)
    console.log(partDec)

    partInt = inverteString(partInt)
    tam = partInt.length

    //parte inteira
    for(let i = 0; i < tam; i++) {
        switch(partInt[i]){
            case 'A':
                dec += 10 * Math.pow(16, i) 
            break;

            case 'B':
                dec += 11 * Math.pow(16, i) 
            break;
                
            case 'C':
                dec += 12 * Math.pow(16, i) 
            break;

            case 'D':
                dec += 13 * Math.pow(16, i) 
            break;

            case 'E':
                dec += 14 * Math.pow(16, i) 
            break;

            case 'F':
                dec += 15 * Math.pow(16, i) 
            break;

            default:
                dec += Number(partInt[i]) * Math.pow(16, i) 
            break;
        }
    }

    //parte decimal
    if(partDec != undefined){
        tam = partDec.length
        for(let i=0;i<tam;i++) {
            switch(partDec[i]){
                case 'A':
                    dec += 10 * 1/(Math.pow(16, (i+1)));
                break;
    
                case 'B':
                    dec += 11 * 1/(Math.pow(16, (i+1)));
                break;
                    
                case 'C':
                    dec += 12 * 1/(Math.pow(16, (i+1)));
                break;
    
                case 'D':
                    dec += 13 * 1/(Math.pow(16, (i+1)));
                break;
    
                case 'E':
                    dec += 14 * 1/(Math.pow(16, (i+1)));
                break;
    
                case 'F':
                    dec += 15 * 1/(Math.pow(16, (i+1)));
                break;
    
                default:
                    dec += Number(partInt[i]) * 1/(Math.pow(16, (i+1)));
                break;
            }
        }
    }

    decimal.value = dec
    dec_bin(dec)
    dec_oct(dec)
}
