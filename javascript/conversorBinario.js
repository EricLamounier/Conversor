function bin_dec(value) {
    let partInt = 0
    let partDec = 0
    let dec = 0
    let tam = 0

    partInt = (Math.trunc(Number(value))).toString()
    partDec = value.split('.')[1]

    partInt = inverteString(partInt)
    tam = partInt.length

    //parte inteira
    for(let i = 0; i < tam; i++) {
        dec += partInt[i] * Math.pow(2, i) 
    }

    //parte decimal
    if(partDec != undefined){
        tam = partDec.length
        for(let i=0;i<tam;i++) {
            dec += partDec[i] * 1/(Math.pow(2, (i+1)));
        }
    }

    decimal.value = dec
    dec_oct(dec)
    dec_hex(dec)
}