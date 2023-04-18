//funcao que recebe n1 e n2
function getNumbers(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    let soma = document.getElementById('soma');
    let subtracao = document.getElementById('subtracao');
    let multiplicacao = document.getElementById('multiplicacao')
    let divisao = document.getElementById('divisao')

    let dec1 = bin_dec(n1);
    let dec2 = bin_dec(n2);

    let res = 0;

    //calculo da soma
    soma.value = dec_bin(dec1 + dec2);

    //calculo da subtracao
    res = dec1 - dec2
    if(res == 0){
        subtracao.value = '0'
    }else if(res < 0){
        subtracao.value = ('-' + dec_bin(res*-1))
    }else{
        subtracao.value = dec_bin(res)
    }

    multiplicacao.value = dec_bin(dec1 * dec2);
    
    dec2 != 0 ? divisao.value = dec_bin(dec1 / dec2) : divisao.value = '';

}

//funcao para converter um numero binario para decimal
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

    //converteu para decimal
    return dec
}

//funcao para converter um numero decimal para binario
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
        return bin
    }else{
        //binario.value = ''
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