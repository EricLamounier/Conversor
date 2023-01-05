function hex_dec(){

    let dec = 0;

    let hex = document.querySelector('#hexadecimal').value;

    let splitted = hex.split('.');

    let inteira = splitted[0];

    let decimal = (splitted[1] || '0');

    let tam = inteira.length - 1;

    //verifica se todos os campos sao validos, 0 1 na parte INTEIRA
    for(let i = 0; i < inteira.length; i++){
        
        switch(inteira[i]){

            case 'A':
                dec += 10 * Math.pow(16, tam);
            break;

            case 'B':
                dec += 11 * Math.pow(16, tam);
            break;

            case 'C':
                dec += 12 * Math.pow(16, tam);
            break;

            case 'D':
                dec += 13 * Math.pow(16, tam);
            break;

            case 'E':
                dec += 14 * Math.pow(16, tam);
            break;

            case 'F':
                dec += 15 * Math.pow(16, tam);
            break;

            default:
                dec += (parseInt(inteira[i] * Math.pow(16, tam)));
            break;
        }
        tam--;
    }

    if(decimal[0] != '0'){
        //verifica se todos os campos sao validos, 0 1 na parte DECIMAL
        for(let i = 0; i< decimal.length; i++) {

            switch(decimal[i]) {
                case 'A':
                    dec += 10 * Math.pow(16, -1*(i+1));
                break;

                case 'B':
                    dec += 11 * Math.pow(16, -1*(i+1));
                break;

                case 'C':
                    dec += 12 * Math.pow(16, -1*(i+1));
                break;

                case 'D':
                    dec += 13 * Math.pow(16, -1*(i+1));
                break;

                case 'E':
                    dec += 14 * Math.pow(16, -1*(i+1));
                break;

                case 'F':
                    dec += 15 * Math.pow(16, -1*(i+1));
                break;

                default:
                    dec += parseInt(decimal[i]) * Math.pow(16, -1*(i+1))
                break;
            }
        }
    }

    
    if(dec === ".NaNNaNNaNNaNNaNNaN" || isNaN(dec)){
        return "Numero invalido!"
    }else{
        return dec
    }
}

function hex_bin(){
    let hex = document.querySelector('#hexadecimal').value;
    let aux;
    
    aux = hex_dec(hex);

    aux = dec_bin(aux);

    if(isNaN(aux) || aux === ".NaNNaNNaNNaNNaNNaN"){
        return "Número invalido!"
    }else{
        return aux;
    }
}

function hex_oct(){
    let hex = document.querySelector('#hexadecimal').value;
    let aux;
    
    aux = hex_dec(hex);

    aux = dec_oct(aux);

    if(isNaN(aux) || aux === ".NaNNaNNaNNaNNaNNaN"){
        return "Número invalido!"
    }else{
        return aux;
    }

}