function oct_dec(){
    let dec = 0;

    let octal = document.querySelector('#octal').value;

    let splitted = octal.split('.');

    let inteira = splitted[0];

    let decimal = (splitted[1] || '0');

    let tam = inteira.length - 1;

    //verifica se todos os campos sao validos, 0 1 na parte INTEIRA
    for(let i = 0; i < inteira.length; i++){
        
        if(inteira[i] > 7){
            return "-"
        }

        dec += (parseInt(inteira[i]) * Math.pow(8, tam));
        tam--;
    }

    //verifica se todos os campos sao validos, 0 1 na parte DECIMAL
    for(let i = 0; i < decimal.length; i++){
        
        if(decimal[i] > 7){
            return "-"
        }

        dec += (parseInt(decimal[i]) * Math.pow(8, -1*(i+1)))
  
    }

    if(dec === ".NaNNaNNaNNaNNaNNaN" || isNaN(dec)){
        return "-"
    }else{
        return dec
    }

}

function oct_bin(){

    let oct = document.querySelector('#octal').value;
    let aux;
    
    aux = oct_dec(oct);

    aux = dec_bin(aux);

    if(isNaN(aux)){
        return "-"
    }else{
        return aux;
    }
}

function oct_hex(){

    let oct = document.querySelector('#octal').value;
    let aux;
    
    aux = oct_dec(oct);

    aux = dec_hex(aux);

    if(aux === ".NaNNaNNaNNaNNaNNaN"){
        return "-"
    }
    return aux;
}