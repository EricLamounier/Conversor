import { bin_dec } from '../javascript/binary.js'
import { dec_bin } from '../javascript/decimal.js'
let n1 = document.getElementById('n1').value;
let n2 = document.getElementById('n2').value;


let bttnCalc = document.getElementById('calcular');

bttnCalc.addEventListener('click', () => {

    let sum = document.getElementById('soma');
    let sub = document.getElementById('subtracao');
    let mul = document.getElementById('multiplicacao');
    let div = document.getElementById('divisao');

    let decN1 = bin_dec(n1);
    let decN2 = bin_dec(n2);
    let aux;

    //soma
    aux = decN1 + decN2;
    sum.value = dec_bin(aux);

    //subtracao
    aux = decN1 - decN2;
    sub.value = dec_bin(aux);

    //multiplicacao
    aux = decN1 * decN2;
    mul.value = dec_bin(aux);

    //divisao
    if(decN2 == 0){
        div.value = 'Err div by 0';
    }else{
        aux = decN1 / decN2;
        div.value = dec_bin(aux);
    }
})