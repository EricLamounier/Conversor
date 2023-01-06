function bin_dec(){
    
    let dec = 0;

    let binario = document.querySelector('#binario').value;

    let splitted = binario.split('.');

    let inteira = splitted[0];

    let decimal = (splitted[1] || '0');

    let tam = inteira.length - 1;

    //verifica se todos os campos sao validos, 0 1 na parte INTEIRA
    for(let i = 0; i < inteira.length; i++){
        
        if(inteira[i] != '0' && inteira[i] != '1'){
            return "-"
        }

        if(inteira[i] == '1'){
            dec += Math.pow(2, tam);
        }
        tam--;
    }

    //verifica se todos os campos sao validos, 0 1 na parte DECIMAL
    for(let i = 0; i < decimal.length; i++){
        
        if(decimal[i] != '0' && decimal[i] != '1'){
            return "-"
        }

        if(decimal[i] == '1'){
            dec += Math.pow(2, -1*(i+1))
        }
    }

    return dec;
}

function bin_oct(){

    let binario = document.querySelector('#binario').value;
    let aux;
    
    aux = bin_dec(binario);

    aux = dec_oct(aux);

    if(isNaN(aux)){
        return "-"
    }else{
        return aux;
    }
}

function bin_hex(){

    let binario = document.querySelector('#binario').value;
    let aux;
    
    aux = bin_dec(binario);

    aux = dec_hex(aux);

    if(aux === ".NaNNaNNaNNaNNaNNaN"){
        return "-"
    }
    return aux;
}